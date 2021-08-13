export function normalizeCdtsVersion(version: CdtsVersion) {
  if (version === "run" || version === "rn") return "rn";
  if (version.startsWith("v")) return version;
  return `v${version.replace(/\./g, "_")}`;
}
export function computeSoyScriptUrl(options: { version: CdtsVersion }) {
  const version = normalizeCdtsVersion(options.version);
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/soyutils.js`;
}

export function computeCdtsScriptUrl(options: {
  version: CdtsVersion;
  language?: "en" | "fr" | null;
}) {
  const version = normalizeCdtsVersion(options.version);
  const language = options.language ?? "en";
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/wet-${language}.js`;
}
/**
 * Lets WET-BOEW know about a new component that was added to the page so that
 * WET-BOEW can apply the WET-BOEW JavaScript to it.
 *
 * @param {string} selector an HTML selector, usually the class
 * name prefixed with a period.
 */
export async function registerWetComponent(selector: string): Promise<void> {
  if (typeof window !== "undefined") {
    console.log(" I can haz window");
    const wet: WetBoew = (window as any).wb as WetBoew;
    const selectors = wet?.selectors ?? [];
    console.log("can I haz wb", wet);
    if (wet && !selectors.includes(selector)) {
      console.log("HALLO!");
      // tell WET there's a new element on the page.
      selectors.push(selector);
      // let WET do its magic.
      wet.start();
    }
  }
  // BUG: WET's imperative DOM manipulation interferes with
  // HMR (hot module replacement) during development. Sometimes we get
  // multiple component elements rendering. This is only affecting HMR so
  // it shouldn't be an issue when deployed.
}

interface WetBoew {
  selectors: string[];
  start: () => void;
}

export type CdtsVersion =
  | "run"
  | "rn"
  | `4.${number}.${number}`
  | `v4_${number}_${number}`;
