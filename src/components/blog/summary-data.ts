// Shared by Summary.astro and the Markdown copy of the posts
export const SUMMARY_TITLE = "Kısaca";

/** The rows in page order, each filled from the prop of the same name */
export const SUMMARY_ROWS = [
  { prop: "what", label: "Ne oldu" },
  { prop: "avoid", label: "Dokunmayın" },
  { prop: "safe", label: "Deneyin" },
] as const;
