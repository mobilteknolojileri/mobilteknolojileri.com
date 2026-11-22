import type { APIContext } from "astro";
import { PROJECTS, type Project } from "@/lib/constants";
import { markdownResponse, siteContext } from "@/lib/markdown/documents";
import { projectMarkdown } from "@/lib/markdown/project";

export function getStaticPaths() {
  return PROJECTS.map((project) => ({ params: { slug: project.slug }, props: { project } }));
}

export function GET({ props }: APIContext<{ project: Project }>) {
  return markdownResponse(projectMarkdown(props.project, siteContext()));
}
