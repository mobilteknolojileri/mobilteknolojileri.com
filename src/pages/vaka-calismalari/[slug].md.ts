import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { caseStudyMarkdown, markdownResponse, siteContext } from "@/lib/markdown/documents";

export async function getStaticPaths() {
  const studies = await getCollection("caseStudies");
  return studies.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export function GET({ props }: APIContext<{ entry: CollectionEntry<"caseStudies"> }>) {
  return markdownResponse(caseStudyMarkdown(props.entry, siteContext()));
}
