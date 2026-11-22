// Checks the agent-facing files in dist/ after a build: every post, case study and project page
// has a Markdown copy that carries all of its article text, and llms.txt keeps the llmstxt.org
// layout. A component that loses text in its Markdown renderer fails here, not on the live site.
// Usage: node scripts/check-markdown.mjs
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ELEMENT_NODE, parse, TEXT_NODE } from "ultrahtml";

const DIST = "dist";
const SECTIONS = ["blog", "vaka-calismalari", "portfolio"];
// Pages whose article text is compared sentence by sentence; project pages have no [data-article]
const ARTICLE_SECTIONS = new Set(["blog", "vaka-calismalari"]);
const problems = [];
const report = (file, message) => problems.push(`${file}: ${message}`);

const decode = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

// Quote style and backticks differ between the page (smartypants, <code>) and the source
const normalize = (text) =>
  decode(text)
    .replace(/`/g, "")
    .replace(/[“”„]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("tr-TR");

const stripProse = (markdown) =>
  markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s*[-*] /gm, "")
    .replace(/^\s*\d+\. /gm, "")
    .replace(/^#{1,6} /gm, "")
    .replace(/^> ?/gm, "")
    .replace(/\*\*/g, "")
    .replace(/(^|[\s("“])[_*]([^_*\n]+)[_*](?=[\s.,;:!?)"”]|$)/gm, "$1$2")
    .replace(/^\|.*\|$/gm, (row) => row.replace(/\|/g, " "));

// Code blocks keep their text; a fence closes only on the marker it opened with
function markdownText(markdown) {
  const out = [];
  let prose = [];
  let fence = null;
  for (const line of markdown.split("\n")) {
    const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
    if (fence === null && marker) {
      out.push(stripProse(prose.join("\n")));
      prose = [];
      fence = marker;
    } else if (fence !== null) {
      const closes =
        marker &&
        marker[0] === fence[0] &&
        marker.length >= fence.length &&
        !line.trim().slice(marker.length);
      if (closes) fence = null;
      else out.push(line);
    } else {
      prose.push(line);
    }
  }
  out.push(stripProse(prose.join("\n")));
  return out.join("\n");
}

const BLOCKS = new Set(
  "p li h1 h2 h3 h4 h5 h6 td th tr figcaption div br dt dd summary blockquote pre section table caption".split(
    " ",
  ),
);

// The visible text of [data-article]; drawings and aria-hidden parts carry no reading text
function articleText(html) {
  let root = null;
  const find = (node) => {
    if (root) return;
    if (node.type === ELEMENT_NODE && "data-article" in (node.attributes ?? {})) root = node;
    else (node.children ?? []).forEach(find);
  };
  find(parse(html));
  if (!root) return null;

  let text = "";
  const walk = (node) => {
    if (node.type === TEXT_NODE) {
      text += node.value;
      return;
    }
    if (node.type !== ELEMENT_NODE) {
      (node.children ?? []).forEach(walk);
      return;
    }
    const name = node.name.toLowerCase();
    if (["svg", "script", "style", "template"].includes(name)) return;
    if (node.attributes?.["aria-hidden"] === "true") return;
    const block = BLOCKS.has(name);
    if (block) text += "\n";
    (node.children ?? []).forEach(walk);
    if (block) text += "\n";
  };
  walk(root);
  return text;
}

function checkClean(file, markdown) {
  if (/\bundefined\b|\[object Object\]|\bNaN\b/.test(markdown)) {
    report(file, "undefined, NaN or [object Object] in the output");
  }
  const prose = markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
  const tag = /<\/?[A-Za-z][A-Za-z0-9-]*(\s[^>]*)?\/?>/.exec(prose);
  if (tag) report(file, `markup left in the text: ${tag[0].slice(0, 60)}`);
  if (prose.includes("—")) report(file, "em dash");
}

const titles = new Map();
let compared = 0;

for (const section of SECTIONS) {
  for (const slug of readdirSync(join(DIST, section))) {
    const htmlFile = join(DIST, section, slug, "index.html");
    if (!existsSync(htmlFile)) continue;
    const page = `/${section}/${slug}`;
    const mdFile = join(DIST, section, `${slug}.md`);
    if (!existsSync(mdFile)) {
      report(page, "no Markdown copy");
      continue;
    }

    const html = readFileSync(htmlFile, "utf8");
    const markdown = readFileSync(mdFile, "utf8");
    titles.set(page, markdown.split("\n")[0].replace(/^# /, ""));
    checkClean(`${page}.md`, markdown);
    if (!html.includes(`<link rel="alternate" type="text/markdown" href="${page}.md">`)) {
      report(page, "no rel=alternate link to its Markdown copy");
    }

    if (!ARTICLE_SECTIONS.has(section)) continue;
    const text = articleText(html);
    if (text === null) {
      report(page, "no [data-article] element to compare");
      continue;
    }
    const copy = normalize(markdownText(markdown));
    const sentences = text
      .split(/\n+|(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ"“(])/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length >= 12);
    for (const sentence of sentences) {
      compared++;
      if (!copy.includes(normalize(sentence))) {
        report(page, `missing from the .md: "${sentence.slice(0, 100)}"`);
      }
    }
  }
}

// llms.txt: prose before the first H2, then H2 sections holding only link lists
const llms = readFileSync(join(DIST, "llms.txt"), "utf8").split("\n");
const firstSection = llms.findIndex((line) => line.startsWith("## "));
llms.forEach((line, index) => {
  if (/^#{3,} /.test(line)) report("llms.txt", `line ${index + 1}: heading below H2`);
  const inLists = firstSection >= 0 && index > firstSection;
  if (inLists && line && !line.startsWith("## ") && !/^- \[[^\]]+\]\([^)]+\)(: .*)?$/.test(line)) {
    report("llms.txt", `line ${index + 1}: not a link list item`);
  }
});

// Every page llms.txt links to must also be in llms-full.txt
const full = readFileSync(join(DIST, "llms-full.txt"), "utf8");
checkClean("llms-full.txt", full);
for (const [, path] of llms.join("\n").matchAll(/\]\(https?:\/\/[^/)]+(\/[^)#]*)\)/g)) {
  const title = titles.get(path);
  if (title && !full.includes(title)) report("llms-full.txt", `no page titled "${title}"`);
}

console.log(`${titles.size} Markdown copies, ${compared} sentences compared`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("Markdown copies match their pages");
