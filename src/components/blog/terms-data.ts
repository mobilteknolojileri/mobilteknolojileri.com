// Shared by Terms.astro and the Markdown copy of the posts
export type TermLabel = "safe" | "wipe" | "tech" | "info" | "serious";

/** What a menu row does to the phone, or how bad a warning screen is, as the badge says */
export const TERM_LABELS: Record<TermLabel, string> = {
  safe: "Güvenli",
  wipe: "Verileri siler",
  tech: "Teknik",
  info: "Bilgi",
  serious: "Ciddi",
};

export interface Term {
  /** The row as the screen shows it */
  term: string;
  label: TermLabel;
  text: string;
}
