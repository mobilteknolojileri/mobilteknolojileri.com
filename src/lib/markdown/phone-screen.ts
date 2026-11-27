import {
  AD,
  ALERT,
  DEFAULT_REGION,
  DEFAULT_TITLE,
  FASTBOOT,
  INTEGRITY,
  LEVELS,
  MENU,
  MENU_MARKS,
  MENU_TITLE,
  NV_DATA_ERROR,
  PLAY_PROTECT,
  VERSION,
  defaultNotes,
  screenLabels,
  verdict,
  type Level,
  type Note,
  type Screen,
  type ScreenText,
} from "@/components/blog/phone-screen-data";
import type { ComponentRenderer } from "./types";

// Colours, the pulsing key ring and icon glyphs (back arrow, "!") are left out: the label already
// says what the drawing marks, so the words on the screen and the notes are what remains

/** The words drawn on each screen, top to bottom */
function drawnText({
  certified,
  region,
  title,
  message,
  items,
}: ScreenText): Record<Screen, string[]> {
  return {
    "main-menu": [MENU_TITLE, ...MENU],
    "nv-data": [MENU_TITLE, ...MENU, NV_DATA_ERROR],
    fastboot: [FASTBOOT],
    "play-protect": [
      PLAY_PROTECT.title,
      PLAY_PROTECT.storeVersion,
      PLAY_PROTECT.certificate,
      certified ? PLAY_PROTECT.certified : PLAY_PROTECT.notCertified,
      PLAY_PROTECT.licenses,
      PLAY_PROTECT.terms,
    ],
    version: [
      VERSION.title,
      VERSION.os,
      `${VERSION.prefix}${region}${VERSION.suffix}`,
      VERSION.caption,
      VERSION.model,
      VERSION.android,
      VERSION.specs,
    ],
    ad: [AD.badge, AD.title, AD.text, AD.button],
    alert: [title, message.split(/\s+/).filter(Boolean).join(" "), ALERT.button],
    integrity: [INTEGRITY.title, ...LEVELS.map(verdict), INTEGRITY.button],
    recovery: [title, ...items],
    message: [title, message, ...items],
  };
}

const string = (value: unknown, fallback: string) => (typeof value === "string" ? value : fallback);
const strings = (value: unknown) =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

export const PhoneScreen: ComponentRenderer = (props, children, ctx) => {
  const screen = props.screen as Screen;
  const text: ScreenText = {
    certified: Boolean(props.certified),
    region: ctx.inline(string(props.region, DEFAULT_REGION)),
    title: ctx.inline(string(props.title, DEFAULT_TITLE)),
    message: ctx.inline(string(props.message, "")),
    pass: Array.isArray(props.pass) ? (props.pass as Level[]) : [],
    items: strings(props.items).map((item) => ctx.inline(item)),
    danger: strings(props.danger).map((item) => ctx.inline(item)),
    color: props.color === "orange" ? "orange" : "red",
  };
  const labels = screenLabels(text);
  if (!Object.hasOwn(labels, screen)) {
    throw new Error(`Unknown PhoneScreen screen: ${String(props.screen)}`);
  }

  // Every label reads "<what> çizimi: <details>", so its head is the bold lead
  const label = labels[screen].trim();
  const cut = label.indexOf(": ");
  const lead = cut < 0 ? `**${label}**` : `**${label.slice(0, cut + 1)}** ${label.slice(cut + 2)}`;

  const notes = Array.isArray(props.notes) ? (props.notes as Note[]) : defaultNotes(text)[screen];
  // Words the label already spells out would only be said twice
  const words = drawnText(text)[screen].filter((word) => word && !label.includes(word));
  // The drawing boxes the region letters inside the version code; plain text has to say which
  const code = `${VERSION.prefix}${text.region}${VERSION.suffix}`;
  const shown = words.map((word) =>
    screen === "version" && word === code
      ? `\`${word}\` (işaretli kısım: \`${text.region}\`)`
      : `\`${word}\``,
  );
  const items = [
    shown.length > 0 && `**Ekrandaki yazılar:** ${shown.join(", ")}`,
    // nv-data draws the same tick and cross as main-menu, but only main-menu's label says so
    screen === "nv-data" && MENU_MARKS,
    ...notes.map((note) => ctx.inline(note.text)),
  ].filter(Boolean);

  return [lead, items.map((item) => `- ${item}`).join("\n"), children].filter(Boolean).join("\n\n");
};
