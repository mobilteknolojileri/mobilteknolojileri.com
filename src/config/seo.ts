export const SEO_DEFAULTS = {
  locale: "tr",
  defaultOgImage: "/og.png",
  readingTimeWpm: 200,
} as const;

export const BLOG_CATEGORY_LABELS = {
  seo: "SEO",
  web: "Web tasarım",
  mobile: "Mobil uygulama",
  research: "Araştırma",
  "case-study": "Vaka çalışması",
  yazılım: "Yazılım",
  android: "Android destek",
} as const;

export const COPY_TOKENS = {
  blogListCta: "Yazıyı okuyun",
  blogContactCta: "Projenizi konuşalım",
  blogContactSecondaryCta: "E-posta gönderin",
} as const;

// The closing call to action of a post; Android posts get their own. The Markdown copy reads it too.
export const BLOG_CTA = {
  android: {
    title: "Sorun devam ediyor mu?",
    body: "Yazı sizin durumunuzu çözmediyse ne olduğunu yazın. Neler denediğinizi de eklerseniz ilk yanıtta daha ileri gideriz.",
    primary: "Sorununuzu anlatın",
  },
  default: {
    title: COPY_TOKENS.blogContactCta,
    body: "Ne yapmak istediğinizi kısaca yazın, nereden başlayacağımızı birlikte netleştirelim.",
    primary: "Formu doldurun",
  },
} as const;

// Readers arrive through the blog; the service page is where they become clients
export const BLOG_SERVICE_BY_CATEGORY: Partial<
  Record<keyof typeof BLOG_CATEGORY_LABELS, { label: string; href: string }>
> = {
  android: { label: "Android yazılım desteği", href: "/android-destek" },
  web: { label: "Web sitesi yapımı", href: "/web-site-yapimi-gaziantep" },
  seo: { label: "Web sitesi yapımı", href: "/web-site-yapimi-gaziantep" },
  mobile: { label: "Mobil uygulama geliştirme", href: "/mobil-uygulama-gelistirme" },
};

export const CONTENT_INTENTS = ["how-to", "troubleshooting", "comparison", "guide"] as const;

const BRAND_ALIASES: Record<string, string> = {
  apple: "Apple",
  samsung: "Samsung",
  xiaomi: "Xiaomi",
  huawei: "Huawei",
  oneplus: "OnePlus",
  google: "Google",
};

export function normalizeBrand(brand?: string): string | undefined {
  if (!brand) return undefined;
  const key = brand.trim().toLowerCase();
  return BRAND_ALIASES[key] ?? brand.trim();
}

export function normalizeDeviceModel(model?: string): string | undefined {
  if (!model) return undefined;
  return model.trim().replace(/\s+/g, " ");
}

export const EDITORIAL_GUIDE = {
  sentenceLengthTarget: "8-22 words",
  headingConvention: "One intent per heading; avoid vague headings",
  ctaVoice: "Direct, useful, and specific",
  forbiddenPatterns: ["[PLACEHOLDER]", "Lorem ipsum", "Asagidaki maddelerde", "robotik tekrarlar"],
} as const;
