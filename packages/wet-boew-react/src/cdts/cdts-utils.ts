import {
  WetBuilder,
  CdtsTopParams,
  Href,
  CdtsRefTopParams,
  CdtsRefFooterParams,
  CdtsSplashTopParams,
} from ".";
import { Language, LanguagePlacement } from "../language";
import { getLanguageFromUrl, translateUrl } from "../language/language";

export function onAnchorClick(handler: (elem: HTMLAnchorElement) => void) {
  document.addEventListener("click", (event) => {
    let target = event.target as HTMLElement;
    if (target.tagName === "A") {
      if (target.classList.contains("wb-exitscript")) {
        console.log("Exit script detected. Bypassing link handler.");
        return event;
      }
      event.preventDefault();
      if (target.onclick) {
        target.onclick(event);
      }
      handler(target as HTMLAnchorElement);
    }
  });
}

export async function injectCdtsResources({
  version,
  language,
}: {
  version: CdtsVersion;
  language?: Language | null;
}) {
  return new Promise<WetBuilder>(async (resolve, reject) => {
    try {
      let wetBuilder: WetBuilder = (window as any)?.wet?.builder;
      if (wetBuilder != null) {
        resolve(wetBuilder);
      }

      window.addEventListener("load", () => {
        wetBuilder = (window as any).wet.builder as WetBuilder;
        resolve(wetBuilder);
      });

      // It's safest to make sure that JQuery is available
      // before we inject anything else;
      await injectJquery({ version });

      injectCdtsSoyScript({ version });
      injectCdtsWetScript({ version, language });
    } catch (err) {
      reject(err);
    }
  });
}

async function injectJquery({ version }: { version: CdtsVersion }) {
  const elem = document.createElement("script");
  elem.src = computeJqueryScriptUrl({ version });
  return injectElement({
    elem,
    placement: "head",
  }) as Promise<HTMLScriptElement>;
}

async function injectCdtsSoyScript({ version }: { version: CdtsVersion }) {
  const elem = document.createElement("script");
  elem.src = computeSoyScriptUrl({ version });
  return injectElement({
    elem,
    placement: "head",
  }) as Promise<HTMLScriptElement>;
}

async function injectCdtsWetScript({
  version,
  language,
}: {
  version: CdtsVersion;
  language?: "en" | "fr" | null;
}) {
  language = language ?? "en";
  const elem = document.createElement("script");
  elem.src = computeCdtsWetScriptUrl({ version, language });
  return injectElement({
    elem,
    placement: "head",
  }) as Promise<HTMLScriptElement>;
}
export function injectCdtsRefTop({
  builder,
  options,
}: {
  builder: WetBuilder;
  options: CdtsRefTopParams;
}) {
  ensureDom();
  const html = builder.refTop(options);
  injectRefsFromHTML({ html, placement: "head" });
}

export function injectCdtsRefFooter({
  builder,
  options,
}: {
  builder: WetBuilder;
  options: CdtsRefFooterParams;
}) {
  ensureDom();
  const html = builder.refFooter(options);
  injectRefsFromHTML({ html, placement: "body" });
}

export function injectCdtsSplashTop({
  builder,
  options,
}: {
  builder: WetBuilder;
  options: CdtsSplashTopParams;
}) {
  ensureDom();
  const html = builder.splashTop(options);
  injectRefsFromHTML({ html, placement: "body" });
}

function injectRefsFromHTML({
  html,
  placement,
}: {
  html: string;
  placement: "head" | "body";
}) {
  const div = document.createElement("div");
  div.innerHTML = html;

  div.querySelectorAll("link").forEach((lnk) => {
    injectElement({ elem: lnk, placement });
  });

  div.querySelectorAll<HTMLScriptElement>("script").forEach((scriptEl) => {
    if (scriptEl.textContent?.length) {
      eval(scriptEl.textContent);
      return;
    }
    // We need to create a new Script Element so that the browser
    // actually loads and evaluates the script;
    const elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.textContent = scriptEl.textContent;

    Array.from(scriptEl.attributes).forEach((attr) => {
      elem.setAttribute(attr.name, attr.value);
    });

    injectElement({ elem, placement });
  });
}

async function injectElement({
  elem,
  placement,
}: {
  elem: HTMLScriptElement | HTMLLinkElement;
  placement?: "head" | "body";
}) {
  return new Promise<HTMLScriptElement | HTMLLinkElement>((resolve, reject) => {
    try {
      placement = placement ?? "head";
      const id = computeElemId(elem);

      let found = document.getElementById(id) as
        | HTMLScriptElement
        | HTMLLinkElement;
      if (found) {
        resolve(found);
      } else {
        elem.id = id;

        elem.onload = (event) => {
          // if (elem.onload) {
          //   elem.onload(event);
          // }
          resolve(elem);
        };
        document[placement].appendChild(elem);
      }
    } catch (err) {
      reject(err);
    }
  });
}

function computeElemId(elem: HTMLScriptElement | HTMLLinkElement) {
  if (elem.id && elem.id.trim().length > 0) {
    return elem.id;
  }

  const dataId = elem.attributes.getNamedItem("data-id")?.value ?? "";
  if (dataId.trim().length > 0) {
    return dataId;
  }

  return urlToId(
    (elem as HTMLLinkElement).href ?? (elem as HTMLScriptElement).src
  );
}

export function computeSoyScriptUrl(options: { version: CdtsVersion }) {
  const version = normalizeCdtsVersion(options.version);
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/soyutils.js`;
}

export function computeCdtsWetScriptUrl(options: {
  version: CdtsVersion;
  language?: "en" | "fr" | null;
}) {
  const version = normalizeCdtsVersion(options.version);
  const language = options.language ?? "en";
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/wet-${language}.js`;
}

export function normalizeCdtsVersion(version: CdtsVersion) {
  if (version === "run" || version === "rn") return "rn";
  if (version.startsWith("v")) return version;
  return `v${version.replace(/\./g, "_")}`;
}

export function computeJqueryScriptUrl(options: { version: CdtsVersion }) {
  const version = normalizeCdtsVersion(options.version);
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/js/jquery/2.2.4/jquery.min.js`;
}

export function computeLngLinks(props: {
  languagePlacement?: LanguagePlacement;
}): CdtsTopParams["lngLinks"] {
  ensureDom();
  const currentUrl = new URL(window.location.href);
  const placement = props.languagePlacement;
  const currentLanguage = getLanguageFromUrl(currentUrl, {
    placement,
  });
  const toLanguage =
    currentLanguage === Language.FR ? Language.EN : Language.FR;

  const translatedPage = translateUrl(currentUrl, {
    placement,
    toLanguage,
  });
  return [
    {
      lang: currentLanguage === Language.FR ? Language.EN : Language.FR,
      href: translatedPage.href as Href,
      text: currentLanguage === Language.FR ? "English" : "Français",
    },
  ];
}

export function ensureDom() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error(
      "No global window or document available. You may be trying to access the DOM from server-side code."
    );
  }
}

export function urlToId(url: string) {
  return url.split("/").pop() ?? url;
}

export function setPageTitle(title?: string) {
  document.title = (title ? `${title} - ` : "") + "Canada.ca";
}

export function setLanguage(language: Language) {
  document.documentElement.lang = language;
}

export type CdtsVersion =
  | "run"
  | "rn"
  | `4.${number}.${number}`
  | `v4_${number}_${number}`;
