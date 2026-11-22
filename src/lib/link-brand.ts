// Picks the logo for a link from its URL
export type LinkBrand =
  | "github"
  | "pull-request"
  | "npm"
  | "react-native-directory"
  | "google-play"
  | "app-store"
  | "bionluk"
  | "email"
  | "pdf"
  | "demo"
  | "web";

export function linkBrand(href: string): LinkBrand {
  if (href.startsWith("mailto:")) return "email";
  if (/\.pdf(?:$|[?#])/i.test(href)) return "pdf";

  let host: string;
  try {
    host = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return "web";
  }

  if (host === "github.com") return /\/pull\/\d+/.test(href) ? "pull-request" : "github";
  if (host.endsWith(".github.io")) return "demo";
  if (host === "npmjs.com") return "npm";
  if (host === "reactnative.directory") return "react-native-directory";
  if (host === "play.google.com") return "google-play";
  if (host === "apps.apple.com") return "app-store";
  if (host === "bionluk.com") return "bionluk";
  return "web";
}

// Sites without a mark of their own show their favicon, saved once under /public (never hotlinked)
const SITE_ICONS: Record<string, string> = {
  "sechard.com": "/assets/sites/sechard.webp",
  "frozenyogurtcafe.com": "/assets/sites/frozenyogurtcafe.webp",
  "ingilizceciyizmobil.com": "/assets/sites/ingilizceciyizmobil.webp",
  "kafadar-web.vercel.app": "/assets/apps/kafadar.webp",
};

export function siteIcon(href: string): string | undefined {
  try {
    return SITE_ICONS[new URL(href).hostname.replace(/^www\./, "")];
  } catch {
    return undefined;
  }
}
