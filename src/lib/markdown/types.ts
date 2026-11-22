export interface RenderContext {
  /** Site origin, no trailing slash */
  baseUrl: string;
  /** "/path" becomes "https://site/path"; absolute URLs pass through */
  absolute: (path: string) => string;
  /** Component props may carry [label](/path) links (see InlineText); this makes them absolute */
  inline: (text: string) => string;
}

/**
 * Turns one MDX component into Markdown that carries the same text the page shows.
 * `props` are the evaluated JSX attributes, `children` the already converted Markdown between
 * the tags ("" for self-closing tags).
 */
export type ComponentRenderer = (
  props: Record<string, unknown>,
  children: string,
  ctx: RenderContext,
) => string;

export function createContext(baseUrl: string): RenderContext {
  const absolute = (path: string) => (path.startsWith("/") ? `${baseUrl}${path}` : path);
  return {
    baseUrl,
    absolute,
    inline: (text) =>
      text.replace(
        /\[([^\]]+)\]\((\/[^)\s]*)\)/g,
        (_, label, href) => `[${label}](${absolute(href)})`,
      ),
  };
}
