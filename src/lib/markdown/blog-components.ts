import { REMOTE_HELP } from "@/components/blog/remote-help-data";
import { SUMMARY_ROWS, SUMMARY_TITLE } from "@/components/blog/summary-data";
import { TERM_LABELS, type Term } from "@/components/blog/terms-data";
import {
  EXAMPLE,
  LABELS,
  describe,
  legend,
  type LegendKind,
} from "@/components/blog/version-code-data";
import type { ComponentRenderer, RenderContext } from "./types";

// Icons, tones and columns are decoration: only the text the reader sees is carried over

type Entry = { label: string; text: string };

// The page sets the label apart from its text; in Markdown a colon does that
const labelled = ({ label, text }: Entry) =>
  `**${label}${/[.:!?]$/.test(label) ? "" : ":"}** ${text}`;

const list = (entries: Entry[]) => entries.map((item) => `- ${labelled(item)}`).join("\n");

export const Summary: ComponentRenderer = (props, _children, ctx) =>
  [
    `**${SUMMARY_TITLE}**`,
    list(
      SUMMARY_ROWS.map(({ prop, label }) => ({ label, text: ctx.inline(props[prop] as string) })),
    ),
  ].join("\n\n");

export const Cards: ComponentRenderer = (props, _children, ctx) =>
  list(
    (props.items as { title: string; text: string }[]).map(({ title, text }) => ({
      label: ctx.inline(title),
      text: ctx.inline(text),
    })),
  );

export const Flow: ComponentRenderer = (props, _children, ctx) =>
  [
    `**${ctx.inline(props.question as string)}**`,
    list(
      (props.branches as { label: string; text: string }[]).map(({ label, text }) => ({
        label: ctx.inline(label),
        text: ctx.inline(text),
      })),
    ),
  ].join("\n\n");

export const Terms: ComponentRenderer = (props, _children, ctx) =>
  (props.items as Term[])
    .map(({ term, label, text }) => `- \`${term}\` (${TERM_LABELS[label]}): ${ctx.inline(text)}`)
    .join("\n");

// The fields work only in a browser: the copy names them and keeps the example's breakdown
export const VersionCode: ComponentRenderer = (_props, _children, ctx) => {
  const { parts, notes } = describe(EXAMPLE, "");
  return [
    `Sayfadaki çözücüde iki alan var: ${LABELS.code} ve ${LABELS.model} ${LABELS.optional}. ${LABELS.modelHint}`,
    `${LABELS.example}: \`${EXAMPLE}\``,
    parts.map(({ code, label, text }) => `- \`${code}\` (${label}): ${text}`).join("\n"),
    notes.map(({ text }) => `- ${ctx.inline(text)}`).join("\n"),
  ].join("\n\n");
};

export const VersionLegend: ComponentRenderer = (props) =>
  legend(props.kind as LegendKind)
    .map(({ code, name }) => `- \`${code}\`: ${name}`)
    .join("\n");

/** The remote help block every Android post ends with */
export function remoteHelpMarkdown(ctx: RenderContext): string {
  const { heading, setup, steps } = REMOTE_HELP;
  // The diagram's own labels, in its left-to-right order; its accessible name repeats step 2
  const diagram = [setup.phone, setup.computer, setup.me]
    .map(({ label, note }) => `${label} (${note})`)
    .join(" → ");
  return [
    `## ${heading}`,
    diagram,
    steps
      .map(
        ({ title, body }, index) =>
          `${index + 1}. ${labelled({ label: title, text: ctx.inline(body) })}`,
      )
      .join("\n"),
  ].join("\n\n");
}
