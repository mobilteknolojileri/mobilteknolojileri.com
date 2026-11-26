// Shared by PhoneScreen.astro and the Markdown copy of the posts
export type Screen =
  | "main-menu"
  | "nv-data"
  | "fastboot"
  | "play-protect"
  | "version"
  | "ad"
  | "alert"
  | "integrity"
  | "recovery"
  | "message";
export type Level = "basic" | "device" | "strong";
export type Tone = "safe" | "danger" | "warn" | "info" | "key";
export type Note = { tone: Tone; text: string };

/** The props that change what a drawing says, after defaults */
export interface ScreenText {
  certified: boolean;
  region: string;
  title: string;
  message: string;
  pass: Level[];
  /** recovery: menu rows; message: lines at the bottom of the screen */
  items: string[];
  /** recovery: rows outlined in red */
  danger: string[];
}

export const DEFAULT_REGION = "CN";
export const DEFAULT_TITLE = "Uyarı";

export const MENU_TITLE = "Main Menu";
export const MENU = ["Reboot", "Wipe Data", "Connect with MIAssistant", "Safe Mode"];
/** The tick and the cross drawn next to the first two rows */
export const MENU_MARKS = "Reboot güvenli, Wipe Data tehlikeli diye işaretli.";
export const NV_DATA_ERROR = "NV data is corrupted";

export const FASTBOOT = "FASTBOOT";

/** Back arrow in the top bar of the settings screens */
export const BACK = "←";

export const PLAY_PROTECT = {
  title: "Hakkında",
  storeVersion: "Play Store sürümü",
  certificate: "Play Protect sertifikası",
  certified: "Cihaz sertifikalı",
  notCertified: "Cihaz sertifikalı değil",
  licenses: "Lisanslar",
  terms: "Hizmet Şartları",
};

export const VERSION = {
  title: "Telefon hakkında",
  os: "HyperOS",
  /** The region letters sit between prefix and suffix */
  prefix: "OS2.0.200.0.VNC",
  suffix: "XM",
  caption: "Sistem sürümü",
  model: "Model",
  android: "Android sürümü",
  specs: "Tüm özellikler",
};

export const AD = {
  badge: "REKLAM",
  title: "Telefonunuz yavaşladı",
  text: "Hemen temizleyin",
  button: "TEMİZLE",
};

export const ALERT = { icon: "!", button: "Tamam" };

export const INTEGRITY = { title: "Play Integrity", button: "CHECK" };

/** "A, B ve C" */
const joinTr = (words: string[]) =>
  words.length < 2 ? words.join("") : `${words.slice(0, -1).join(", ")} ve ${words.at(-1)}`;
const quoted = (text: string) => `“${text}”`;
export const LEVELS: Level[] = ["basic", "device", "strong"];
export const verdict = (level: Level) => `MEETS_${level.toUpperCase()}_INTEGRITY`;

// A drawing of the screen, not a screenshot: the maker's mascots and logos stay out
export function screenLabels({
  certified,
  region,
  title,
  message,
  pass,
  items,
  danger,
}: ScreenText): Record<Screen, string> {
  return {
    "main-menu": `Xiaomi kurtarma ekranı çizimi: Main Menu başlığı altında Reboot, Wipe Data, Connect with MIAssistant ve Safe Mode satırları. ${MENU_MARKS}`,
    "nv-data":
      "Xiaomi kurtarma ekranı çizimi: Main Menu satırlarının altında kırmızı “NV data is corrupted” yazısı.",
    fastboot:
      "Xiaomi Fastboot ekranı çizimi: siyah ekranda turuncu FASTBOOT yazısı, telefonun sağındaki güç tuşu işaretli.",
    "play-protect": `Play Store Hakkında ekranı çizimi: Play Protect sertifikası satırında “${certified ? PLAY_PROTECT.certified : PLAY_PROTECT.notCertified}” yazıyor.`,
    version: `Telefon hakkında ekranı çizimi: HyperOS sürüm kodunun sonundaki bölge harfleri ${region} olarak işaretli.`,
    ad: "Telefon ekranını kaplayan reklam çizimi: büyük bir “Temizle” düğmesi ve köşede küçücük bir kapatma işareti.",
    alert: `Uygulama uyarısı çizimi: ${title}. ${message}${/[.!?]$/.test(message) ? "" : "."}`,
    integrity: `Play Integrity kontrol ekranı çizimi: ${pass.length ? `geçen düzeyler ${pass.join(", ")}` : "basic, device ve strong düzeylerinin üçü de geçmiyor"}.`,
    recovery: `Kurtarma ekranı çizimi: ${title} başlığı altında ${joinTr(items)} satırları, ilk satır seçili.${danger.length ? ` ${joinTr(danger)} kırmızıyla işaretli.` : ""}`,
    message: `Siyah ekranda uyarı çizimi: kırmızı bir üçgenin altında ${quoted(title)} yazıyor${message ? `, altında ${quoted(message)}` : ""}${items.length ? `, en altta ${joinTr(items.map(quoted))}` : ""}.`,
  };
}

export function defaultNotes({ certified, region, pass }: ScreenText): Record<Screen, Note[]> {
  return {
    "main-menu": [
      { tone: "safe", text: "Reboot: telefonu yeniden başlatır, veri silmez." },
      { tone: "danger", text: "Wipe Data: telefondaki her şeyi kalıcı olarak siler." },
    ],
    "nv-data": [
      { tone: "safe", text: "Reboot: veri silmez, denemesi güvenli." },
      { tone: "danger", text: "Wipe Data: bu hatayı düzeltmez, verileri siler." },
    ],
    fastboot: [{ tone: "key", text: "Güç tuşu: telefon yeniden açılana kadar basılı tutun." }],
    "play-protect": [
      { tone: "info", text: "Yol: Play Store, profil simgesi, Ayarlar, Hakkında." },
      certified
        ? { tone: "safe", text: "Cihaz sertifikalı: Google bu telefonu tanıyor." }
        : {
            tone: "danger",
            text: "Cihaz sertifikalı değil: Google bu telefonu kendi listesinde görmüyor.",
          },
    ],
    version: [
      region === "CN"
        ? { tone: "warn", text: "CN: telefonda Çin sürümü yazılım var." }
        : { tone: "safe", text: `${region}: telefonda global sürüm yazılım var.` },
      { tone: "info", text: "MI global, EU Avrupa, TR Türkiye, CN Çin sürümü demek." },
    ],
    ad: [
      {
        tone: "danger",
        text: "Tam ekran ve kapatma işareti küçücük: çoğu zaman yüklü bir uygulamadan gelir.",
      },
      { tone: "warn", text: "“Temizle” gibi büyük düğmelere dokunmayın." },
    ],
    alert: [],
    integrity: [
      pass.length === 3
        ? { tone: "safe", text: "Üç düzey de geçiyor: uygulamalar telefona güveniyor." }
        : {
            tone: "danger",
            text: "Geçmeyen düzeyler kırmızı: o düzeyi isteyen uygulamalar açılmaz ya da uyarı verir.",
          },
      { tone: "info", text: "Basic en gevşek, strong en sıkı kontrol." },
    ],
    recovery: [],
    message: [],
  };
}
