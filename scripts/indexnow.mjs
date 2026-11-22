// Tells IndexNow (Bing, Yandex and others) which pages a push changed.
// Usage: node scripts/indexnow.mjs <from-commit> <to-commit>
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";

const SITE = "https://mobilteknolojileri.com";
const [from, to = "HEAD"] = process.argv.slice(2);

// A new branch has no previous commit, so fall back to the parent
const base = from && !/^0+$/.test(from) ? from : `${to}~1`;
const files = execFileSync("git", ["diff", "--name-only", `${base}..${to}`], { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const paths = new Set();
for (const file of files) {
  const post = file.match(/^src\/content\/blog\/([^/]+)\.mdx?$/);
  const study = file.match(/^src\/content\/case-studies\/([^/]+)\.mdx$/);
  const page = file.match(/^src\/pages\/(.+)\.astro$/);
  if (post && post[1] !== "task") paths.add(`/blog/${post[1]}`).add("/blog");
  else if (study) paths.add(`/vaka-calismalari/${study[1]}`);
  else if (page && !/[[_]/.test(page[1])) paths.add(`/${page[1].replace(/(^|\/)index$/, "")}`);
  else if (file === "src/lib/constants.ts") paths.add("/portfolio").add("/");
}

if (paths.size === 0) {
  console.log("No page changed, nothing to send");
  process.exit(0);
}

const key = readdirSync("public")
  .find((name) => /^[0-9a-f]{32}\.txt$/.test(name))
  ?.replace(/\.txt$/, "");
if (!key) throw new Error("IndexNow key file not found in public/");

const urlList = [...paths].map((path) => SITE + (path === "/" ? "/" : path.replace(/\/$/, "")));
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key,
    keyLocation: `${SITE}/${key}.txt`,
    urlList,
  }),
});
console.log(`IndexNow ${response.status}: ${urlList.join(" ")}`);
if (!response.ok) process.exit(1);
