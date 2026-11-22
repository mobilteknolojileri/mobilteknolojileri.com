import type { ComponentRenderer, RenderContext } from "./types";

/*
 * A small reader for the MDX this site writes: Markdown plus capitalised components whose props
 * are strings or object literals. It is not a general MDX parser. Anything it does not know
 * (an unregistered component, a stray expression) fails the build instead of leaking into the
 * Markdown copy.
 */

type Renderers = Record<string, ComponentRenderer>;

function skipString(src: string, start: number): number {
  const quote = src[start];
  for (let i = start + 1; i < src.length; i++) {
    if (src[i] === "\\") i++;
    else if (src[i] === quote) return i + 1;
  }
  throw new Error(`Unterminated string at ${start}`);
}

function skipExpression(src: string, start: number): number {
  let depth = 0;
  for (let i = start; i < src.length;) {
    const char = src[i];
    if (char === '"' || char === "'" || char === "`") {
      i = skipString(src, i);
      continue;
    }
    if (char === "{") depth++;
    if (char === "}" && --depth === 0) return i + 1;
    i++;
  }
  throw new Error(`Unterminated expression at ${start}`);
}

// The content is this repository's own, evaluated at build time only
const evaluate = (code: string): unknown => new Function(`"use strict"; return (${code});`)();

function dedent(text: string): string {
  const lines = text.replace(/^\n+|\s+$/g, "").split("\n");
  const indents = lines.filter((line) => line.trim()).map((line) => /^\s*/.exec(line)![0].length);
  const cut = indents.length ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(cut)).join("\n");
}

// Prettier wraps the text between component tags; joined lines keep links and sentences whole
// for tools that read the file line by line
function unwrap(markdown: string): string {
  return markdown
    .split(/\n{2,}/)
    .map((block) =>
      /^\s*([-*>|#!]|\d+\.|```|~~~)/m.test(block) ? block : block.replace(/\n/g, " "),
    )
    .join("\n\n");
}

interface Tag {
  name: string;
  props: Record<string, unknown>;
  end: number;
  children: string;
}

function readTag(src: string, start: number): Tag {
  const name = /^<([A-Z][A-Za-z0-9]*)/.exec(src.slice(start))![1];
  const props: Record<string, unknown> = {};
  let i = start + name.length + 1;

  for (;;) {
    while (/\s/.test(src[i] ?? "")) i++;
    if (src.startsWith("/>", i)) return { name, props, end: i + 2, children: "" };
    if (src[i] === ">") {
      i++;
      break;
    }
    const attr = /^[A-Za-z_][\w-]*/.exec(src.slice(i));
    if (!attr) throw new Error(`Cannot read the attributes of <${name}> at ${i}`);
    i += attr[0].length;
    while (/\s/.test(src[i] ?? "")) i++;
    if (src[i] !== "=") {
      props[attr[0]] = true;
      continue;
    }
    i++;
    while (/\s/.test(src[i] ?? "")) i++;
    if (src[i] === '"' || src[i] === "'") {
      const close = skipString(src, i);
      props[attr[0]] = src.slice(i + 1, close - 1);
      i = close;
    } else if (src[i] === "{") {
      const close = skipExpression(src, i);
      props[attr[0]] = evaluate(src.slice(i + 1, close - 1));
      i = close;
    } else {
      throw new Error(`Unsupported value for ${attr[0]} on <${name}>`);
    }
  }

  // Children run to the matching closing tag; same-name nesting is counted
  const open = new RegExp(`<${name}(?=[\\s/>])`, "g");
  const close = `</${name}>`;
  let depth = 1;
  let cursor = i;
  while (depth > 0) {
    const nextClose = src.indexOf(close, cursor);
    if (nextClose < 0) throw new Error(`<${name}> is never closed`);
    open.lastIndex = cursor;
    const nextOpen = open.exec(src);
    if (nextOpen && nextOpen.index < nextClose) {
      depth++;
      cursor = nextOpen.index + 1;
    } else {
      depth--;
      cursor = nextClose + close.length;
    }
  }
  return { name, props, end: cursor, children: src.slice(i, cursor - close.length) };
}

function convertText(src: string, renderers: Renderers, ctx: RenderContext, mdx: boolean): string {
  if (!mdx) return src;
  let out = "";
  for (let i = 0; i < src.length;) {
    const char = src[i];

    if (char === "`") {
      const run = /^`+/.exec(src.slice(i))![0];
      const close = src.indexOf(run, i + run.length);
      const end = close < 0 ? i + run.length : close + run.length;
      out += src.slice(i, end);
      i = end;
      continue;
    }

    if (char === "{") {
      const end = skipExpression(src, i);
      const code = src.slice(i + 1, end - 1).trim();
      if (!/^\/\*[\s\S]*\*\/$/.test(code)) {
        const value = evaluate(code);
        if (typeof value !== "string" && typeof value !== "number") {
          throw new Error(`Unsupported MDX expression: {${code}}`);
        }
        out += String(value);
      }
      i = end;
      continue;
    }

    if (char === "<" && /^<[A-Z]/.test(src.slice(i, i + 2))) {
      const tag = readTag(src, i);
      const render = renderers[tag.name];
      if (!render) throw new Error(`No Markdown renderer for <${tag.name}>`);
      const children = tag.children
        ? unwrap(mdxToMarkdown(dedent(tag.children), renderers, ctx))
        : "";
      out += `\n\n${render(tag.props, children, ctx).trim()}\n\n`;
      i = tag.end;
      continue;
    }

    out += char;
    i++;
  }
  return out;
}

/**
 * Converts an MDX body into plain Markdown with absolute internal links. Pass `mdx: false` for
 * .md files, where braces and angle brackets are ordinary text.
 */
export function mdxToMarkdown(
  source: string,
  renderers: Renderers,
  ctx: RenderContext,
  { mdx = true }: { mdx?: boolean } = {},
): string {
  const lines = source.split("\n");
  let out = "";
  let text: string[] = [];
  let fence: string | null = null;

  const flush = () => {
    if (!text.length) return;
    out += convertText(text.join("\n"), renderers, ctx, mdx).replace(
      /(!?\[[^\]]*\]\()(\/[^)\s]*)/g,
      (_, head, path) => `${head}${ctx.absolute(path)}`,
    );
    out += "\n";
    text = [];
  };

  for (const line of lines) {
    const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
    if (fence === null && marker) {
      flush();
      fence = marker;
      out += `${line}\n`;
    } else if (fence !== null) {
      out += `${line}\n`;
      if (
        marker &&
        marker[0] === fence[0] &&
        marker.length >= fence.length &&
        !line.trim().slice(marker.length)
      ) {
        fence = null;
      }
    } else {
      text.push(line);
    }
  }
  flush();

  return out
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
