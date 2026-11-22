import { getCollection } from "astro:content";
import {
  caseStudyMarkdown,
  demoteHeadings,
  postMarkdown,
  siteContext,
} from "@/lib/markdown/documents";
import { projectMarkdown } from "@/lib/markdown/project";
import {
  contactSection,
  listedProjects,
  servicesSection,
  siteIntro,
  splitPosts,
} from "@/lib/markdown/site";

// llms.txt lists the pages; this file carries their full text in the same sections and order.
// The blocks every post repeats (remote help, call to action) and screenshot lists are left out.
export async function GET() {
  const ctx = siteContext();
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const studies = (await getCollection("caseStudies")).sort((a, b) => a.data.order - b.data.order);
  const { primary, optional } = listedProjects();
  const { android, other } = splitPosts(posts);
  const options = { standalone: false };

  const section = (title: string, pages: string[]) =>
    `## ${title}\n\n${pages.map((page) => demoteHeadings(page, 2)).join("\n\n---\n\n")}`;

  const content = [
    siteIntro(ctx.baseUrl, { full: true }),
    servicesSection(ctx.baseUrl),
    section(
      "Vaka çalışmaları",
      studies.map((entry) => caseStudyMarkdown(entry, ctx)),
    ),
    section(
      "Projeler",
      [...primary, ...optional].map((project) => projectMarkdown(project, ctx, options)),
    ),
    section(
      "Android yazıları",
      android.map((entry) => postMarkdown(entry, ctx, options)),
    ),
    section(
      "Yazılım, web ve SEO yazıları",
      other.map((entry) => postMarkdown(entry, ctx, options)),
    ),
    contactSection(ctx.baseUrl),
  ].join("\n\n");

  // Static output drops these headers; public/_headers sets the production Content-Type
  return new Response(`${content}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
