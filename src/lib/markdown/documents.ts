import type { CollectionEntry } from "astro:content";
import {
  BLOG_CATEGORY_LABELS,
  BLOG_CTA,
  BLOG_SERVICE_BY_CATEGORY,
  COPY_TOKENS,
} from "@/config/seo";
import { KIND_LABELS } from "@/config/portfolio";
import { SITE_CONFIG } from "@/config/site";
import { formatDate } from "@/lib/blog";
import { PROJECTS } from "@/lib/constants";
import { remoteHelpMarkdown } from "./blog-components";
import { BLOG_RENDERERS, CASE_STUDY_RENDERERS } from "./components";
import { mdxToMarkdown } from "./mdx";
import { createContext, type RenderContext } from "./types";

export const siteContext = (): RenderContext =>
  createContext(import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url);

// Static output drops these headers; public/_headers sets the production Content-Type
export const markdownResponse = (text: string) =>
  new Response(`${text.trim()}\n`, { headers: { "content-type": "text/markdown; charset=utf-8" } });

const join = (...blocks: (string | false | undefined)[]) =>
  blocks.filter((block): block is string => Boolean(block && block.trim())).join("\n\n");

/**
 * A post in the order the page shows it: header, body, remote help, FAQ, closing call to action.
 * `standalone: false` (llms-full.txt) leaves out the blocks every post repeats.
 */
export function postMarkdown(
  entry: CollectionEntry<"blog">,
  ctx: RenderContext,
  { standalone = true }: { standalone?: boolean } = {},
): string {
  const { data } = entry;
  const isMdx = entry.filePath?.endsWith(".mdx") ?? true;
  const cta = data.category === "android" ? BLOG_CTA.android : BLOG_CTA.default;
  const service = BLOG_SERVICE_BY_CATEGORY[data.category];

  const facts = [
    `- Adres: ${ctx.baseUrl}/blog/${entry.id}`,
    `- Konu: ${BLOG_CATEGORY_LABELS[data.category]}`,
    `- Yayın tarihi: ${formatDate(data.date)}`,
    data.updated && `- Güncelleme: ${formatDate(data.updated)}`,
    `- Yazar: ${SITE_CONFIG.author}, ${SITE_CONFIG.name}`,
    `- Etiketler: ${data.tags.map((tag) => `#${tag}`).join(" ")}`,
  ].filter(Boolean);

  const faq = data.faq?.length
    ? join(
        "## Sıkça sorulan sorular",
        ...data.faq.map((item) => `### ${item.question}\n\n${ctx.inline(item.answer)}`),
      )
    : "";

  return join(
    `# ${data.title}`,
    `> ${data.description}`,
    facts.join("\n"),
    data.heroImage && `![${data.title}](${data.heroImage})`,
    mdxToMarkdown(entry.body ?? "", BLOG_RENDERERS, ctx, { mdx: isMdx }),
    standalone && data.category === "android" && remoteHelpMarkdown(ctx),
    faq,
    standalone && `## ${cta.title}`,
    standalone && cta.body,
    standalone &&
      `- [${cta.primary}](${ctx.absolute("/#contact")})\n- [${COPY_TOKENS.blogContactSecondaryCta}](mailto:${SITE_CONFIG.links.email})`,
    standalone &&
      service &&
      `Bu konuda nasıl çalıştığımı [${service.label}](${ctx.absolute(service.href)}) sayfasında anlattım.`,
  );
}

/** A case study in page order: badges, hero facts, cover, body, project page, English original */
export function caseStudyMarkdown(
  entry: CollectionEntry<"caseStudies">,
  ctx: RenderContext,
): string {
  const study = entry.data;
  const project = PROJECTS.find((item) => item.slug === study.project);
  if (!project) throw new Error(`Case study ${entry.id}: no project "${study.project}"`);
  const badges = [project.kind && KIND_LABELS[project.kind], "Vaka çalışması"].filter(Boolean);

  const facts = [
    `- Adres: ${ctx.baseUrl}/vaka-calismalari/${entry.id}`,
    `- ${badges.join(" · ")}`,
    `- Sonuç: ${study.outcome}`,
    `- Rol: ${study.role}`,
    `- Süre: ${study.timeline}`,
    `- Durum: ${study.status}`,
    `- Teknolojiler: ${study.stack.join(", ")}`,
    `- Bağlantılar: ${study.links.map((link) => `[${link.label}](${ctx.absolute(link.href)})`).join(", ")}`,
  ];

  return join(
    `# ${study.title}`,
    `> ${study.lead}`,
    facts.join("\n"),
    `![${study.cover.alt}](${ctx.absolute(study.cover.src)})`,
    study.cover.caption,
    mdxToMarkdown(entry.body ?? "", CASE_STUDY_RENDERERS, ctx),
    `Proje sayfası: [${project.title}](${ctx.absolute(`/portfolio/${project.slug}`)})`,
    "## İngilizce aslı",
    `Bu metin GitHub'daki vaka çalışmasının Türkçesi. [Aslını okuyun](${study.original}).`,
  );
}

/** Pushes every heading down, so a page can sit under the section headings of llms-full.txt */
export function demoteHeadings(markdown: string, levels: number): string {
  let fence: string | null = null;
  return markdown
    .split("\n")
    .map((line) => {
      const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
      if (marker) {
        if (fence === null) fence = marker;
        else if (marker[0] === fence[0] && marker.length >= fence.length) fence = null;
        return line;
      }
      const heading = fence === null && /^(#{1,6}) (.*)$/.exec(line);
      if (!heading) return line;
      const depth = heading[1].length + levels;
      return depth <= 6 ? `${"#".repeat(depth)} ${heading[2]}` : `**${heading[2]}**`;
    })
    .join("\n");
}
