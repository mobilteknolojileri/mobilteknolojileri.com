import type { CollectionEntry } from "astro:content";
import { SITE_CONFIG } from "@/config/site";
import { PROJECTS, type Project } from "@/lib/constants";
import {
  TESTIMONIALS,
  TESTIMONIAL_COUNT,
  TESTIMONIAL_PEOPLE,
  TESTIMONIAL_REPEAT_PEOPLE,
} from "@/lib/testimonials";

// Shared by llms.txt and llms-full.txt so the two files never describe the business differently

/** H1, summary and the prose that comes before the first H2. `full` is llms-full.txt itself. */
export function siteIntro(baseUrl: string, { full = false }: { full?: boolean } = {}): string {
  const fullText = full
    ? ""
    : ` Projelerin, vaka çalışmalarının ve yazıların tam metni tek dosyada da var: ${baseUrl}/llms-full.txt`;
  return `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.name}, Gaziantep'te ${SITE_CONFIG.author}'in yürüttüğü tek kişilik yazılım işidir: mobil uygulama geliştirme, web sitesi yapımı ve Android yazılım desteği. Eski adı ${SITE_CONFIG.alternateName}. Eski alan adı goldsword.dev artık bu işe ait değil. Site: ${baseUrl}, e-posta: ${SITE_CONFIG.links.email}.

Ağırlıklı olarak mobil uygulama ve SaaS ürünleri geliştiriyorum. Gaziantep'te yaşayan, full-stack çalışan freelance bir yazılım geliştiriciyim ve 30'dan fazla ticari projede geliştirme yaptım. Trakya Üniversitesi Mobil Teknolojileri programından 2025'te mezun oldum (3,79/4,00).

Ekip de taşeron da yok. Projeyi fikir ve kapsam aşamasından yayına kadar tek başıma götürürüm. Mağazaya çıkışta da sonrasında da muhatabınız aynı kişidir.

- **Uçtan uca:** Tasarım, frontend, backend ve yayına alma (deploy) işini kendim yaparım.
- **Yayındaki işler:** Demo projelerle sınırlı kalmadım, müşteriler için yayında çalışan sistemler kurdum. Örnekleri aşağıdaki Projeler bölümünde.
- **Kısa karar zinciri:** Tek kişi olduğum için araya onay zinciri girmez. Dolayısıyla geri bildirimi doğrudan koda yansıtırım.
- **Araçlar:** Bugün en çok Astro, React, Expo ve Supabase ile çalışıyorum.
- **Mimari ve planlama:** Kod yazmadan önce ihtiyacı ve veri modelini çıkarır, gerekirse teknik araştırma yaparım. Yapıyı, ürünün ileride büyüyebileceğini hesaba katarak kurarım.
- **Yayına alma:** Projeyi Vercel'de, Docker'la ya da Hetzner gibi bir VPS'te yayına alırım. Güncellemeler için CI/CD kurarım.
- **Süreç:** Önce neyin gerektiğini birlikte netleştiririz. İşin gerektirmediği karmaşıklığı eklemem. Çalışan ilk sürüm (MVP) önce gelir, ardından geliştirme ve gerekirse ölçekleme. Her aşamada ne yapıldığını ve sırada ne olduğunu size bildiririm.

Yazıların, vaka çalışmalarının ve projelerin Markdown sürümü, sayfa adresinin sonuna .md eklenerek alınır (${baseUrl}/blog/<yazı>.md gibi).${fullText}`;
}

export function servicesSection(baseUrl: string): string {
  return `## Hizmetler

- [Mobil uygulama geliştirme](${baseUrl}/mobil-uygulama-gelistirme): Fikir aşamasından App Store ve Google Play'deki yayına kadar. iOS ve Android için tek kod tabanıyla, React Native ya da Flutter ile geliştiriyorum.
- [Web sitesi yapımı](${baseUrl}/web-site-yapimi-gaziantep): Hızı ve teknik SEO'su baştan düşünülmüş kurumsal siteler ve tanıtım sayfaları. Google'ın siteyi tarayıp dizine ekleyebilmesi için gereken altyapıyı kurar, sayfaları hızlı tutarım.
- [Android yazılım desteği](${baseUrl}/android-destek): Açılmayan, güncellemeden sonra bozulan, yavaşlayan ya da root veya ROM sonrası sorun çıkaran Android telefonların yazılımını uzaktan onarırım: açılış, sistem, uygulamalar ve veri. Telefon sizde kalır. Windows bilgisayarınıza USB kabloyla bağlarsınız, ben internet üzerinden o bilgisayara bağlanıp işi yaparım. Logoda kalan, sürekli yeniden başlayan ya da fastboot veya kurtarma ekranında bekleyen cihazların çoğunda sorun yazılımdadır. Ekranı hiç yanmayan, titreşmeyen cihazda ise sorun genellikle donanımdadır. Bootloader kilidi açma, kurtarma, custom ROM ve root kurulumunu da yaparım. Marka ayrımı yapmıyorum ama işlerin çoğu Xiaomi, Redmi ve POCO cihazlarından, özellikle HyperOS'a geçmiş olanlardan geliyor. Donanım tamiri yapmıyorum, sahibi belli olmayan cihazda hesap kilidi açmıyorum. Siz onaylamadan veri silen bir adım atmam. Sabit bir fiyat listem yok, fiyatı sorun anlaşılınca söylerim.
- [Gaziantep freelancer yazılım geliştirici](${baseUrl}/gaziantep-freelancer): Gaziantep'te web sitesi, mobil uygulama ve teknik SEO işlerini baştan sona tek başıma yürütürüm.`;
}

export function contactSection(baseUrl: string): string {
  const allFiveStars = TESTIMONIALS.every((item) => item.rating === 5);
  const reviews =
    `Profilde ${TESTIMONIAL_PEOPLE} kişiden ${TESTIMONIAL_COUNT} yorum var` +
    `${allFiveStars ? ", hepsi beş yıldız" : ""}. ` +
    `Yorum yapanlardan ${TESTIMONIAL_REPEAT_PEOPLE} kişi bana birden fazla kez iş verdi.`;

  return `## İletişim

- [E-posta](mailto:${SITE_CONFIG.links.email}): ${SITE_CONFIG.links.email}. Yeni bir ürün, var olan bir sistemin iyileştirilmesi ya da Android cihazınızdaki bir sorun için yazabilirsiniz.
- [İletişim formu](${baseUrl}/#contact): Ana sayfadaki form.
- [Bionluk](${SITE_CONFIG.links.bionluk}): ${reviews}
- [GitHub](${SITE_CONFIG.links.github}): Açık kaynak projeler ve vaka çalışmalarının İngilizce asılları.
- [npm](https://www.npmjs.com/~mobilteknolojileri): Yayımladığım paketler.`;
}

// Verified live work, case studies and open source lead; the smaller jobs are optional reading
const isPrimary = (project: Project) =>
  Boolean(project.featured || project.status === "live" || project.caseStudy) ||
  project.kind === "open-source";

/** The projects both files list, featured first. fabric-detection stays out of both. */
export function listedProjects() {
  const projects = PROJECTS.filter((project) => project.slug !== "fabric-detection").sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
  return {
    primary: projects.filter(isPrimary),
    optional: projects.filter((project) => !isPrimary(project)),
  };
}

/** Android posts answer readers with a broken phone; the rest are about software and the web */
export function splitPosts(posts: CollectionEntry<"blog">[]) {
  return {
    android: posts.filter((post) => post.data.category === "android"),
    other: posts.filter((post) => post.data.category !== "android"),
  };
}
