import { getCollection } from "astro:content";
import { CATEGORY_LABELS, KIND_LABELS, STATUS_LABELS } from "@/config/portfolio";
import { BLOG_CATEGORY_LABELS } from "@/config/seo";
import { SITE_CONFIG } from "@/config/site";
import { PROJECTS, type Project } from "@/lib/constants";
import {
  TESTIMONIALS,
  TESTIMONIAL_COUNT,
  TESTIMONIAL_PEOPLE,
  TESTIMONIAL_REPEAT_PEOPLE,
} from "@/lib/testimonials";

// Layout from https://llmstxt.org: prose before the first H2, then H2 sections holding only link
// lists. "Optional" is the section an agent may skip when its context is short.
export async function GET() {
  const BASE_URL = import.meta.env.PUBLIC_SITE_URL || "https://mobilteknolojileri.com";
  const absolute = (path: string) => (path.startsWith("/") ? `${BASE_URL}${path}` : path);
  const sentence = (text: string) => (/[.!?]$/.test(text) ? text : `${text}.`);
  const lower = (text: string) => text.toLocaleLowerCase("tr-TR");
  // "23K+" is fine on a counter but reads as an English abbreviation in a sentence
  const spoken = (value: string) => value.replace(/^(\d+)K\+$/, "$1 binden fazla");

  const posts = (await getCollection("blog", ({ data }) => data.draft !== true)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const formatPost = (post: (typeof posts)[number]) => {
    const topic =
      post.data.category === "android" ? "" : ` Konu: ${BLOG_CATEGORY_LABELS[post.data.category]}.`;
    const date = post.data.date.toLocaleDateString("tr-TR");
    return `- [${post.data.title}](${BASE_URL}/blog/${post.id}): ${sentence(post.data.description)}${topic} Tarih: ${date}.`;
  };
  const androidPosts = posts.filter((post) => post.data.category === "android");
  const otherPosts = posts.filter((post) => post.data.category !== "android");

  const caseStudies = (await getCollection("caseStudies"))
    .sort((a, b) => a.data.order - b.data.order)
    .map(
      ({ id, data }) =>
        `- [${data.title}](${BASE_URL}/vaka-calismalari/${id}): ${sentence(data.summary)} ` +
        `Sonuç: ${sentence(data.outcome)} Teknolojiler: ${data.stack.join(", ")}. ` +
        `[İngilizce aslı](${data.original}).`,
    )
    .join("\n");

  const formatProject = (project: Project) => {
    const labels = [
      CATEGORY_LABELS[project.category],
      project.kind && KIND_LABELS[project.kind],
      project.status && STATUS_LABELS[project.status],
    ].filter((label): label is string => Boolean(label));
    const meta = labels
      .filter(
        (label, index) => labels.findIndex((other) => lower(other) === lower(label)) === index,
      )
      .map((label, index) => (index === 0 ? label : lower(label)))
      .join(", ");

    const links = [
      ...(project.caseStudy ? [{ label: "Vaka çalışması", url: project.caseStudy }] : []),
      ...project.links,
    ];
    const parts = [`${meta}.`, sentence(project.description)];
    if (project.metrics?.length) {
      const metrics = project.metrics.map((metric) => `${spoken(metric.value)} ${metric.label}`);
      parts.push(`Ölçümler: ${metrics.join("; ")}.`);
    }
    parts.push(`Teknolojiler: ${project.technologies.join(", ")}.`);
    if (links.length) {
      parts.push(
        `Bağlantılar: ${links.map((link) => `[${link.label}](${absolute(link.url)})`).join(", ")}.`,
      );
    }
    return `- [${project.title}](${BASE_URL}/portfolio/${project.slug}): ${parts.join(" ")}`;
  };

  // Verified live work, case studies and open source lead; the smaller jobs are optional reading
  const isPrimary = (project: Project) =>
    Boolean(project.featured || project.status === "live" || project.caseStudy) ||
    project.kind === "open-source";
  const projects = PROJECTS.filter((project) => project.slug !== "fabric-detection").sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
  const primaryProjects = projects.filter(isPrimary);
  const optionalProjects = projects.filter((project) => !isPrimary(project));

  const allFiveStars = TESTIMONIALS.every((item) => item.rating === 5);
  const reviews =
    `Profilde ${TESTIMONIAL_PEOPLE} kişiden ${TESTIMONIAL_COUNT} yorum var` +
    `${allFiveStars ? ", hepsi beş yıldız" : ""}. ` +
    `Yorum yapanlardan ${TESTIMONIAL_REPEAT_PEOPLE} kişi bana birden fazla kez iş verdi.`;

  const content = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.name}, Gaziantep'te ${SITE_CONFIG.author}'in yürüttüğü tek kişilik yazılım işidir: mobil uygulama geliştirme, web sitesi yapımı ve Android yazılım desteği. Eski adı ${SITE_CONFIG.alternateName}. Site: ${BASE_URL}, e-posta: ${SITE_CONFIG.links.email}.

Ağırlıklı olarak mobil uygulama ve SaaS ürünleri geliştiriyorum. Gaziantep'te yaşayan, full-stack çalışan freelance bir yazılım geliştiriciyim ve 30'dan fazla ticari projede geliştirme yaptım. Trakya Üniversitesi Mobil Teknolojileri programından 2025'te mezun oldum (3,79/4,00).

Ekip de taşeron da yok. Projeyi fikir ve kapsam aşamasından yayına kadar tek başıma götürürüm. Mağazaya çıkışta da sonrasında da muhatabınız aynı kişidir.

- **Uçtan uca:** Tasarım, frontend, backend ve yayına alma (deploy) işini kendim yaparım.
- **Yayındaki işler:** Demo projelerle sınırlı kalmadım, müşteriler için yayında çalışan sistemler kurdum. Örnekleri aşağıdaki Projeler bölümünde.
- **Kısa karar zinciri:** Tek kişi olduğum için araya onay zinciri girmez. Dolayısıyla geri bildirimi doğrudan koda yansıtırım.
- **Araçlar:** Bugün en çok Astro, React, Expo ve Supabase ile çalışıyorum.
- **Mimari ve planlama:** Kod yazmadan önce ihtiyacı ve veri modelini çıkarır, gerekirse teknik araştırma yaparım. Yapıyı, ürünün ileride büyüyebileceğini hesaba katarak kurarım.
- **Yayına alma:** Projeyi Vercel'de, Docker'la ya da Hetzner gibi bir VPS'te yayına alırım. Güncellemeler için CI/CD kurarım.
- **Süreç:** Önce neyin gerektiğini birlikte netleştiririz. İşin gerektirmediği karmaşıklığı eklemem. Çalışan ilk sürüm (MVP) önce gelir, ardından geliştirme ve gerekirse ölçekleme. Her aşamada ne yapıldığını ve sırada ne olduğunu size bildiririm.

## Hizmetler

- [Mobil uygulama geliştirme](${BASE_URL}/mobil-uygulama-gelistirme): Fikir aşamasından App Store ve Google Play'deki yayına kadar. iOS ve Android için tek kod tabanıyla, React Native ya da Flutter ile geliştiriyorum.
- [Web sitesi yapımı](${BASE_URL}/web-site-yapimi-gaziantep): Hızı ve teknik SEO'su baştan düşünülmüş kurumsal siteler ve tanıtım sayfaları. Teknik SEO tarafında Google'ın siteyi tarayıp dizine ekleyebilmesi için gereken altyapıyı ve sayfa hızını kurarım.
- [Android yazılım desteği](${BASE_URL}/android-destek): Açılmayan, güncellemeden sonra bozulan ya da yavaşlayan Android cihazların yazılım tarafı: kurtarma, ROM ve veri. Telefonun yazılımını uzaktan onarırım, telefon sizde kalır. Windows bilgisayarınıza USB kabloyla bağlarsınız, ben internet üzerinden o bilgisayara bağlanıp işi yaparım.
- [Gaziantep freelancer yazılım geliştirici](${BASE_URL}/gaziantep-freelancer): Gaziantep'te web sitesi, mobil uygulama ve teknik SEO işlerini baştan sona tek başıma yürütürüm.

## Vaka çalışmaları

${caseStudies}

## Projeler

${primaryProjects.map(formatProject).join("\n")}

## Android yazıları

${androidPosts.map(formatPost).join("\n")}

## Yazılım, web ve SEO yazıları

${otherPosts.map(formatPost).join("\n")}

## İletişim

- [E-posta](mailto:${SITE_CONFIG.links.email}): ${SITE_CONFIG.links.email}. Yeni bir ürün, var olan bir sistemin iyileştirilmesi ya da Android cihazınızdaki bir sorun için yazabilirsiniz.
- [İletişim formu](${BASE_URL}/#contact): Ana sayfadaki form.
- [Bionluk](${SITE_CONFIG.links.bionluk}): ${reviews}
- [GitHub](${SITE_CONFIG.links.github}): Açık kaynak projeler ve vaka çalışmalarının İngilizce asılları.
- [npm](https://www.npmjs.com/~mobilteknolojileri): Yayımladığım paketler.

## Optional

${optionalProjects.map(formatProject).join("\n")}
- [Portfolyo](${BASE_URL}/portfolio): Bütün işler tek sayfada.
- [Blog](${BASE_URL}/blog): Bütün yazılar.
- [RSS beslemesi](${BASE_URL}/rss.xml)
- [Site haritası](${BASE_URL}/sitemap-index.xml)
`;

  // Static output drops these headers; public/_headers sets the production Content-Type
  return new Response(content, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
