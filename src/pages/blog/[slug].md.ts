import type { APIContext } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { markdownResponse, postMarkdown, siteContext } from "@/lib/markdown/documents";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

export function GET({ props }: APIContext<{ entry: CollectionEntry<"blog"> }>) {
  return markdownResponse(postMarkdown(props.entry, siteContext()));
}
