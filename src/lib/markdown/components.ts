import { Cards, Flow, Summary } from "./blog-components";
import { Diagram, Figure, Table } from "./case-study-components";
import { PhoneScreen } from "./phone-screen";
import type { ComponentRenderer } from "./types";

// The same components blog/[slug].astro and vaka-calismalari/[slug].astro hand to <Content />
export const BLOG_RENDERERS: Record<string, ComponentRenderer> = {
  Summary,
  Cards,
  Flow,
  PhoneScreen,
};
export const CASE_STUDY_RENDERERS: Record<string, ComponentRenderer> = { Figure, Diagram, Table };
