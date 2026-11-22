import { SITE_CONFIG } from "@/config/site";
import { normalizeBrand, normalizeDeviceModel } from "@/config/seo";

const joinUrl = (base: string, path?: string) => {
  if (!path) return base;
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

const getBaseUrl = () => import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

// One entity graph: every schema on the site points at these ids
const ids = (baseUrl: string) => ({
  organization: `${baseUrl}/#organization`,
  person: `${baseUrl}/#person`,
  website: `${baseUrl}/#website`,
});

const SERVICES = [
  {
    name: "Mobil uygulama geliştirme",
    path: "/mobil-uygulama-gelistirme",
    description: "Fikir aşamasından App Store ve Google Play'deki yayına kadar.",
  },
  {
    name: "Web sitesi yapımı",
    path: "/web-site-yapimi-gaziantep",
    description: "Hızı ve teknik SEO'su baştan düşünülmüş web siteleri.",
  },
  {
    name: "Android yazılım desteği",
    path: "/android-destek",
    description:
      "Açılmayan, güncellemeden sonra bozulan ya da yavaşlayan Android cihazların yazılım tarafı: kurtarma, ROM ve veri.",
  },
];

const AREA_SERVED = [
  { "@type": "City", name: "Gaziantep" },
  { "@type": "Country", name: "Türkiye" },
];

const publisherRef = (baseUrl: string) => ({
  "@type": "Organization",
  "@id": ids(baseUrl).organization,
  name: SITE_CONFIG.name,
  logo: {
    "@type": "ImageObject",
    url: joinUrl(baseUrl, SITE_CONFIG.logo),
  },
});

const authorRef = (baseUrl: string) => ({
  "@type": "Person",
  "@id": ids(baseUrl).person,
  name: SITE_CONFIG.author,
  url: `${baseUrl}/`,
});

export function getWebSiteSchema() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ids(baseUrl).website,
    name: SITE_CONFIG.name,
    alternateName: [SITE_CONFIG.alternateName, "mobilteknolojileri.com"],
    url: `${baseUrl}/`,
    inLanguage: "tr-TR",
    publisher: { "@id": ids(baseUrl).organization },
  };
}

export function getPersonSchema(locale: string = SITE_CONFIG.locale) {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ids(baseUrl).person,
    name: SITE_CONFIG.author,
    alternateName: SITE_CONFIG.alternateName,
    url: `${baseUrl}/`,
    image: joinUrl(baseUrl, SITE_CONFIG.profileImage),
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    worksFor: { "@id": ids(baseUrl).organization },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Trakya Üniversitesi" },
    jobTitle: locale === "tr" ? "Full Stack Yazılım Geliştirici" : "Full Stack Software Developer",
    description:
      locale === "tr"
        ? "Freelance yazılım geliştirici. Mobil uygulama ve web sitesi geliştirir, Android telefonlarda yazılım desteği verir. Bugüne kadar 30'dan fazla proje teslim etti; React Native, Flutter, Astro ve Next.js ile çalışır."
        : "Freelance software developer building mobile apps and websites, and providing Android software support. 30+ delivered projects; works with React Native, Flutter, Astro and Next.js.",
    knowsAbout: [
      "Flutter Development",
      "React Native",
      "Next.js",
      "Full Stack Development",
      "Mobile App Development",
      "Cybersecurity & Encryption",
      "AI/ML Integration",
      "Unity Game Development",
      "Python",
      "TypeScript",
      "Node.js",
      "Microsoft Phi-4 / DeepSeek-V3",
      "TensorFlow / PyTorch",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "tr" ? "Yazılım Geliştirici" : "Software Developer",
      occupationLocation: {
        "@type": "Country",
        name: locale === "tr" ? "Türkiye" : "Turkey",
      },
    },
  };
}

export function getOrganizationSchema(locale: string = SITE_CONFIG.locale) {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ids(baseUrl).organization,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    url: `${baseUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: joinUrl(baseUrl, SITE_CONFIG.logo),
    },
    image: joinUrl(baseUrl, SITE_CONFIG.ogImage),
    email: SITE_CONFIG.links.email,
    description:
      locale === "tr"
        ? "Tek kişilik yazılım işi: mobil uygulama, web sitesi ve Android yazılım desteği."
        : "One-person software business: mobile apps, websites and Android software support.",
    founder: { "@id": ids(baseUrl).person },
    areaServed: AREA_SERVED,
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.links.email,
      contactType: locale === "tr" ? "Müşteri Hizmetleri" : "Customer Service",
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// The same business as the Organization node (same @id), seen as a local service provider
export function getLocalBusinessSchema() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ids(baseUrl).organization,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.alternateName,
    description: SITE_CONFIG.description,
    url: `${baseUrl}/`,
    image: joinUrl(baseUrl, SITE_CONFIG.ogImage),
    logo: joinUrl(baseUrl, SITE_CONFIG.logo),
    email: SITE_CONFIG.links.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gaziantep",
      addressCountry: "TR",
    },
    areaServed: AREA_SERVED,
    founder: { "@id": ids(baseUrl).person },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "22:00",
    },
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmetler",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: joinUrl(baseUrl, service.path),
          areaServed: AREA_SERVED,
          provider: { "@id": ids(baseUrl).organization },
        },
      })),
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  url: string;
  image?: string;
  deviceBrand?: string;
  deviceModel?: string;
}) {
  const baseUrl = getBaseUrl();

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: joinUrl(baseUrl, post.image || SITE_CONFIG.ogImage),
    datePublished: post.date.toISOString(),
    dateModified: (post.updated ?? post.date).toISOString(),
    inLanguage: "tr-TR",
    author: authorRef(baseUrl),
    publisher: publisherRef(baseUrl),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };

  const deviceBrand = normalizeBrand(post.deviceBrand);
  const deviceModel = normalizeDeviceModel(post.deviceModel);
  const mentions = [
    ...(deviceBrand ? [{ "@type": "Brand", name: deviceBrand }] : []),
    ...(deviceModel ? [{ "@type": "Product", name: deviceModel }] : []),
  ];
  if (mentions.length > 0) schema.mentions = mentions;

  return schema;
}

export function getBlogFAQSchema(faqs: { question: string; answer: string }[]) {
  return getFAQSchema(faqs);
}

// Case study pages are Turkish translations of the GitHub originals
export function getCaseStudySchema(study: {
  title: string;
  description: string;
  url: string;
  image: string;
  date: Date;
  keywords: string[];
  original: string;
}) {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.description,
    image: joinUrl(baseUrl, study.image),
    datePublished: study.date.toISOString(),
    dateModified: study.date.toISOString(),
    inLanguage: "tr-TR",
    keywords: study.keywords.join(", "),
    author: authorRef(baseUrl),
    publisher: publisherRef(baseUrl),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": study.url,
    },
    translationOfWork: {
      "@type": "TechArticle",
      url: study.original,
      inLanguage: "en",
    },
  };
}
