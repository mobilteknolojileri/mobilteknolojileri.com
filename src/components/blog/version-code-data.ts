// Shared by VersionCode.astro (page and its script), VersionLegend.astro and the Markdown copy
export type Tone = "safe" | "warn" | "info";
export type Note = { tone: Tone; text: string };
export type Part = { code: string; label: string; text: string };

/** Xiaomi 17, global, HyperOS 3.3 (July 2026) */
export const EXAMPLE = "OS3.0.332.0.XPCMIXM";
export const MODEL_EXAMPLE = "2312DRA50G";

export const LABELS = {
  code: "Sürüm kodu",
  model: "Model numarası",
  optional: "(isteğe bağlı)",
  modelHint: "Model numarasının son harfi yazılımın bölgesiyle karşılaştırılır.",
  example: "Örnek kod",
  helpText: "Telefonun gerçekte ne çalıştırdığına ve ne yapılabileceğine bakarım.",
  help: "Sonucu bana gönderin",
};

/** First of the seven letters: the Android version the build is based on */
export const ANDROID: Record<string, string> = {
  X: "17",
  W: "16",
  V: "15",
  U: "14",
  T: "13",
  S: "12",
  R: "11",
  Q: "10",
  P: "9",
  O: "8",
};

/** Fourth and fifth letters. Xiaomi lists the first seven; TW, JP and KR come from firmware lists */
export const REGIONS: Record<string, { name: string; build: string; tone: Tone }> = {
  MI: { name: "Global", build: "global sürüm", tone: "safe" },
  EU: { name: "Avrupa", build: "Avrupa sürümü", tone: "safe" },
  TR: { name: "Türkiye", build: "Türkiye sürümü", tone: "safe" },
  CN: { name: "Çin", build: "Çin sürümü", tone: "warn" },
  IN: { name: "Hindistan", build: "Hindistan sürümü", tone: "info" },
  RU: { name: "Rusya", build: "Rusya sürümü", tone: "info" },
  ID: { name: "Endonezya", build: "Endonezya sürümü", tone: "info" },
  TW: { name: "Tayvan", build: "Tayvan sürümü", tone: "info" },
  JP: { name: "Japonya", build: "Japonya sürümü", tone: "info" },
  KR: { name: "Güney Kore", build: "Güney Kore sürümü", tone: "info" },
};

/** Last character of the model number, the four Xiaomi explains */
export const MODEL_MARKETS: Record<string, { name: string; market: string; region: string }> = {
  G: { name: "Global", market: "global pazar", region: "" },
  C: { name: "Çin", market: "Çin pazarı", region: "CN" },
  I: { name: "Hindistan", market: "Hindistan pazarı", region: "IN" },
  J: { name: "Japonya", market: "Japonya pazarı", region: "JP" },
};

const FAKE_ROM = "/blog/fake-rom-nasil-anlasilir";
const GLOBAL_ROM = "/blog/cin-surumu-telefona-global-rom";

const capital = (text: string) => text.charAt(0).toLocaleUpperCase("tr-TR") + text.slice(1);

// A Turkish keyboard turns a capital i into İ
const normalize = (text: string) =>
  text.replace(/[İı]/g, "I").toLocaleUpperCase("en-US").replace(/\s+/g, "");

// Also reads the MIUI layout "14.0.4.0(TMRMIXM)" and a string pasted with "Xiaomi HyperOS" before it
const CODE =
  /(OS|V)?(\d{1,2})\.(\d{1,3})\.(\d{1,4})\.(\d{1,2})[.(]?([A-Z])([A-Z0-9]{2})([A-Z]{2})([A-Z]{2})/;

function decode(input: string): { parts: Part[]; region?: string; notes: Note[] } {
  const text = normalize(input);
  if (!text) return { parts: [], notes: [] };
  if (/DEV\)?$/.test(text)) {
    return {
      parts: [],
      notes: [
        {
          tone: "info",
          text: "Bu bir geliştirici (beta) sürümü. Bu sürümlerin kodunda genellikle bölge ve model harfleri yer almaz.",
        },
      ],
    };
  }
  const match = CODE.exec(text);
  if (!match) {
    return {
      parts: [],
      notes: [
        {
          tone: "info",
          text: `Bu kodu çözemedim. Telefon hakkında ekranındaki kodu harfleriyle birlikte yazın, örneğin ${EXAMPLE}.`,
        },
      ],
    };
  }

  const [, prefix = "", major, minor, build, patch, android, device, region, carrier] = match;
  // HyperOS counts from 1, MIUI from 9; the prefix may be left out on the screen
  const hyperos = prefix ? prefix === "OS" : !text.includes("MIUI") && Number(major) < 6;
  const known = REGIONS[region];
  const parts: Part[] = [
    {
      code: `${prefix}${major}.${minor}`,
      label: "Yazılım",
      text: hyperos
        ? `HyperOS ${major} olduğunu gösterir. HyperOS ${major}.2 gibi ara sürümler de burada ${major}.0 diye yazar.`
        : `MIUI ${minor === "0" ? major : `${major}.${minor}`} olduğunu gösterir.`,
    },
    {
      code: `${build}.${patch}`,
      label: "Yapı numarası",
      text:
        "Aynı model ve bölgede büyük sayı daha yeni bir güncelleme demek." +
        (patch === "0" ? "" : " Son rakam 0 olmadığı için bu bir test sürümü olabilir."),
    },
    {
      code: android,
      label: "Android",
      text: ANDROID[android]
        ? `Yazılımın Android ${ANDROID[android]} tabanlı olduğunu gösterir.`
        : "Bu harfin hangi Android sürümüne denk geldiğini bilmiyorum.",
    },
    {
      code: device,
      label: "Model kodu",
      text: "Telefon modelinin kısaltması. Her modelin kendi harfleri vardır, bölgeyle ilgisi yoktur.",
    },
    {
      code: region,
      label: "Bölge",
      text: known ? `${capital(known.build)}.` : "Bu bölge kodu listemde yok.",
    },
    {
      code: carrier,
      label: "Operatör",
      text: carrier === "XM" ? "Bir operatöre bağlı olmayan sürüm." : "Bir operatöre özel sürüm.",
    },
  ];

  const notes: Note[] = [];
  if (!known) {
    notes.push({ tone: "info", text: "Bölge harflerini tanımadım. Kodu bana yazarsanız bakarım." });
  } else if (region === "CN") {
    notes.push({
      tone: "warn",
      text: `Telefonda Çin sürümü yazılım var. Google hizmetleri ve Türkçe bu yazılımda çoğu zaman eksiktir. [Global yazılıma geçişi ayrıca anlattım](${GLOBAL_ROM}).`,
    });
  } else if (known.tone === "safe") {
    notes.push({ tone: "safe", text: `Yazılım kendini ${known.build} olarak tanıtıyor.` });
  } else {
    notes.push({
      tone: "info",
      text: `Yazılım ${known.name} için yayımlanmış. Telefon büyük olasılıkla oradan geldi.`,
    });
  }
  return { parts, region: known ? region : undefined, notes };
}

function compareModel(input: string, region?: string): Note | null {
  const letter = normalize(input)
    .replace(/[^A-Z0-9]/g, "")
    .slice(-1);
  if (!letter) return null;
  if (/\d/.test(letter)) {
    return {
      tone: "info",
      text: `Model numarası harfle biter, örneğin ${MODEL_EXAMPLE}. Telefon hakkında, Tüm özellikler ekranındaki Model satırına bakın.`,
    };
  }
  const made = MODEL_MARKETS[letter];
  if (!made) {
    return {
      tone: "info",
      text: `Model numarasının son harfi (${letter}) Xiaomi'nin açıkladığı G, C, I ve J harflerinden biri değil.`,
    };
  }
  if (!region)
    return {
      tone: "info",
      text: `Model numarası telefonun ${made.market} için üretildiğini gösteriyor.`,
    };

  const build = REGIONS[region].build;
  if (letter === "C" && region !== "CN") {
    return {
      tone: "warn",
      text: `Telefon Çin pazarı için üretilmiş, yazılım ise ${build}. Bu ya sonradan kurulmuş resmî yazılımdır ya da [fake ROM](${FAKE_ROM}).`,
    };
  }
  if (letter !== "C" && region === "CN") {
    return {
      tone: "warn",
      text: `Telefon ${made.market} için üretilmiş, yazılım ise Çin sürümü. Yazılım sonradan değiştirilmiş olabilir.`,
    };
  }
  // A global model runs any regional build but the Chinese one
  if (made.region === region || letter === "G") {
    return {
      tone: "safe",
      text: `Model numarası da telefonun ${made.market} için üretildiğini gösteriyor, yazılımla tutuyor.`,
    };
  }
  return {
    tone: "info",
    text: `Telefon ${made.market} için üretilmiş, yazılım ise ${build}. Yazılım sonradan değiştirilmiş olabilir.`,
  };
}

/** Opens the contact message with what the reader typed */
export function contactSubject(code: string, model: string): string {
  const parts = [code, model].map((value) => normalize(value).slice(0, 40));
  return [parts[0] && `${parts[0]} sürüm kodu`, parts[1] && `${parts[1]} model numarası`]
    .filter(Boolean)
    .join(" ve ");
}

/** What the decoder shows for a version code and an optional model number */
export function describe(code: string, model: string): { parts: Part[]; notes: Note[] } {
  const decoded = decode(code);
  const modelNote = compareModel(model, decoded.region);
  return { parts: decoded.parts, notes: modelNote ? [...decoded.notes, modelNote] : decoded.notes };
}

export type LegendKind = "android" | "regions" | "models";

/** The letter tables under the decoder */
export function legend(kind: LegendKind): { code: string; name: string }[] {
  if (kind === "android") {
    return Object.entries(ANDROID).map(([code, version]) => ({ code, name: `Android ${version}` }));
  }
  const table = kind === "regions" ? REGIONS : MODEL_MARKETS;
  return Object.entries(table).map(([code, { name }]) => ({ code, name }));
}
