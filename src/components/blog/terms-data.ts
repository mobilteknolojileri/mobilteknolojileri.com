// Shared by Terms.astro and the Markdown copy of the posts
export type TermLabel = "safe" | "wipe" | "tech";

/** What a menu row does to the phone, as the badge next to it says */
export const TERM_LABELS: Record<TermLabel, string> = {
  safe: "Güvenli",
  wipe: "Verileri siler",
  tech: "Teknik",
};

export interface Term {
  /** The row as the screen shows it */
  term: string;
  label: TermLabel;
  text: string;
}
