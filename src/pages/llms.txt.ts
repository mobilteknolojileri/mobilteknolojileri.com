import { getCollection } from "astro:content";
import { CATEGORY_LABELS, KIND_LABELS, STATUS_LABELS } from "@/config/portfolio";
import { BLOG_CATEGORY_LABELS } from "@/config/seo";
import type { Project } from "@/lib/constants";
import {
  contactSection,
  listedProjects,
  servicesSection,
  siteIntro,
  splitPosts,
} from "@/lib/markdown/site";

// Layout from https://llmstxt.org: prose before the first H2, then H2 sections holding only link
// lists. "Optional" is the section an agent may skip when its context is short.
export async function GET() {
  const BASE_URL = import.meta.env.PUBLIC_SITE_URL || "https://mobilteknolojileri.com";
  const absolute = (path: string) => (path.startsWith("/") ? `${BASE_URL}${path}` : path);
  const sentence = (text: string) => (/[.!?]$/.test(text) ? text : `${text}.`);
  const lower = (text: string) => text.toLocaleLowerCase("tr-TR");
  // "23K+" is fine on a counter but reads as an English abbreviation in a sentence
  const spoken = (value: string) =>
    value.replace(/^(\d+)K\+$/, "$1 binden fazla").replace(/^~\s*/, "yaklaşık ");

  const posts = (await getCollection("blog", ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const formatPost = (post: (typeof posts)[number]) => {
    const topic =
      post.data.category === "android"
        ? ""
        : ` Blog kategorisi: ${BLOG_CATEGORY_LABELS[post.data.category]}.`;
    const date = post.data.date.toLocaleDateString("tr-TR");
    return `- [${post.data.title}](${BASE_URL}/blog/${post.id}): ${sentence(post.data.description)}${topic} Tarih: ${date}.`;
  };
  const { android: androidPosts, other: otherPosts } = splitPosts(posts);

  const caseStudies = (await getCollection("caseStudies"))
    .sort((a, b) => a.data.order - b.data.order)
    .map(
      ({ id, data }) =>
        `- [${data.title}](${BASE_URL}/vaka-calismalari/${id}): ${sentence(data.summary)} ` +
        `Sonuç: ${sentence(data.outcome)} Teknolojiler: ${data.stack.join(", ")}. ` +
        `[İngilizce aslı](${data.original}).`,
    )
    .join("\n");

  const formatProject = (project: Project) => {
    const labels = [
      CATEGORY_LABELS[project.category],
      project.kind && KIND_LABELS[project.kind],
      project.status && STATUS_LABELS[project.status],
    ].filter((label): label is string => Boolean(label));
    const meta = labels
      .filter(
        (label, index) => labels.findIndex((other) => lower(other) === lower(label)) === index,
      )
      .map((label, index) => (index === 0 ? label : lower(label)))
      .join(", ");

    const links = [
      ...(project.caseStudy ? [{ label: "Vaka çalışması", url: project.caseStudy }] : []),
      ...project.links,
    ];
    const parts = [`${meta}.`, sentence(project.description)];
    if (project.metrics?.length) {
      const metrics = project.metrics.map((metric) => `${spoken(metric.value)} ${metric.label}`);
      parts.push(`Ölçümler: ${metrics.join("; ")}.`);
    }
    parts.push(`Teknolojiler: ${project.technologies.join(", ")}.`);
    if (links.length) {
      parts.push(
        `Bağlantılar: ${links.map((link) => `[${link.label}](${absolute(link.url)})`).join(", ")}.`,
      );
    }
    return `- [${project.title}](${BASE_URL}/portfolio/${project.slug}): ${parts.join(" ")}`;
  };

  const { primary: primaryProjects, optional: optionalProjects } = listedProjects();

  const content = `${siteIntro(BASE_URL)}

${servicesSection(BASE_URL)}

## Vaka çalışmaları

${caseStudies}

## Projeler

${primaryProjects.map(formatProject).join("\n")}

## Android yazıları

${androidPosts.map(formatPost).join("\n")}

## Yazılım, web ve SEO yazıları

${otherPosts.map(formatPost).join("\n")}

${contactSection(BASE_URL)}

## Optional

${optionalProjects.map(formatProject).join("\n")}
- [Tam metin](${BASE_URL}/llms-full.txt): Projelerin, vaka çalışmalarının ve yazıların tam metni tek dosyada.
- [Portfolyo](${BASE_URL}/portfolio): Bütün işler tek sayfada.
- [Blog](${BASE_URL}/blog): Bütün yazılar.
- [RSS beslemesi](${BASE_URL}/rss.xml)
- [Site haritası](${BASE_URL}/sitemap-index.xml)
`;

  // Static output drops these headers; public/_headers sets the production Content-Type
  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
