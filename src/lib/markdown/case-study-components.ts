import type { ComponentRenderer } from "./types";

// The same files Diagram.astro inlines
const SVGS = import.meta.glob<string>("/src/assets/case-studies/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };

function decodeEntities(text: string): string {
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (match, name: string) => {
    if (/^#x/i.test(name)) return String.fromCodePoint(parseInt(name.slice(2), 16));
    if (name.startsWith("#")) return String.fromCodePoint(parseInt(name.slice(1), 10));
    return ENTITIES[name] ?? match;
  });
}

// A bracket in the alt text would end the image label early
const escapeLabel = (text: string) => text.replace(/[[\]\\]/g, "\\$&");

const blocks = (...parts: string[]) => parts.filter(Boolean).join("\n\n");

export const Figure: ComponentRenderer = ({ src, alt }, caption, ctx) => {
  if (typeof src !== "string" || typeof alt !== "string") {
    throw new Error("<Figure> needs string src and alt props");
  }
  return blocks(`![${escapeLabel(alt)}](${ctx.absolute(src)})`, caption);
};

// The SVG's <title> is the only text that describes the whole diagram
export const Diagram: ComponentRenderer = ({ id }, caption) => {
  const svg = SVGS[`/src/assets/case-studies/${String(id)}.svg`];
  if (!svg) throw new Error(`Unknown case-study diagram: ${String(id)}`);
  const title = /<title\b[^>]*>([\s\S]*?)<\/title>/.exec(svg)?.[1];
  if (!title?.trim()) throw new Error(`Case-study diagram ${String(id)} has no <title>`);
  return blocks(`**Şema:** ${decodeEntities(title).replace(/\s+/g, " ").trim()}`, caption);
};

// The children are already a Markdown table
export const Table: ComponentRenderer = (_props, children) => children;
