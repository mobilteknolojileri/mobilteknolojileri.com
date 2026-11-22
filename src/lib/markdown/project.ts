import { CATEGORY_LABELS, KIND_LABELS, STATUS_LABELS } from "@/config/portfolio";
import type { Project } from "../constants";
import type { RenderContext } from "./types";

// A bracket in a label or alt text would end it early
const escapeLabel = (text: string) => text.replace(/[[\]\\]/g, "\\$&");

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

/**
 * The /portfolio/<slug> page as Markdown, starting with "# <title>". Follows the order and
 * headings of portfolio/[slug].astro; related projects, the back link, the contact button and
 * the password demo are left out. `standalone: false` (llms-full.txt) also drops the screenshot
 * list, which carries no text.
 */
export function projectMarkdown(
  project: Project,
  ctx: RenderContext,
  { standalone = true }: { standalone?: boolean } = {},
): string {
  const image = (src: string, alt: string) => `![${escapeLabel(alt)}](${ctx.absolute(src)})`;
  const link = (label: string, url: string) => `[${escapeLabel(label)}](${ctx.absolute(url)})`;
  const blocks: string[] = [];
  const add = (...parts: (string | false | undefined)[]) => {
    for (const part of parts) if (part) blocks.push(part);
  };

  // The badges above the title, in the page's order
  const badges = [
    project.kind && KIND_LABELS[project.kind],
    project.kind !== "open-source" && CATEGORY_LABELS[project.category],
    project.status && STATUS_LABELS[project.status],
  ].filter((label): label is string => Boolean(label));

  const links = project.links.map(({ label, url }) => link(label, url));
  if (project.caseStudy) links.push(link("Vaka çalışmasını okuyun", project.caseStudy));
  const metrics = (project.metrics ?? []).map(({ value, label }) => `**${value}** ${label}`);

  // One list: separate lists with blank lines between them render as a single loose list
  const facts = [
    `Adres: ${ctx.absolute(`/portfolio/${project.slug}`)}`,
    badges.length > 0 && badges.join(" · "),
    links.length > 0 && `Bağlantılar: ${links.join(", ")}`,
    metrics.length > 0 && `Ölçümler: ${metrics.join("; ")}`,
  ].filter((item): item is string => Boolean(item));

  add(
    `# ${project.title}`,
    project.description
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n"),
    list(facts),
  );

  if (project.showcase) {
    add(image(project.showcase.image, project.showcase.alt), project.showcase.caption);
  } else if (project.image) {
    add(image(project.image, project.title));
  }

  add(`## Proje hakkında\n\n${project.detailedDescription}`);
  if (project.features.length) add(`## Öne çıkanlar\n\n${list(project.features)}`);
  if (project.challenges) add(`## Zorluklar\n\n${project.challenges}`);

  for (const item of project.gallery ?? []) add(image(item.image, item.alt), item.caption);

  // The page folds everything after the sixth screenshot; the copy lists them all
  const screenshots = project.screenshots ?? [];
  if (standalone && screenshots.length) {
    const shots = screenshots.map((src, index) =>
      image(src, `${project.title} ekran görüntüsü ${index + 1}`),
    );
    add(`## Ekran görüntüleri\n\n${list(shots)}`);
  }

  if (project.technologies.length) add(`## Teknolojiler\n\n${list(project.technologies)}`);

  return blocks.join("\n\n");
}
