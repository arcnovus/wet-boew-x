import type {
  WetBuilder,
  CdtsRefTopParams,
  CdtsRefFooterParams,
  CdtsSplashTopParams,
} from ".";

import { Language } from "./language";

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

function injectJquery({ version }: { version: CdtsVersion }) {
  const elem = document.createElement("script");
  elem.src = computeJqueryScriptUrl({ version });
  return injectElement({
    elem,
    placement: "head",
  }) as Promise<HTMLScriptElement>;
}

function injectCdtsSoyScript({ version }: { version: CdtsVersion }) {
  const elem = document.createElement("script");
  elem.src = computeSoyScriptUrl({ version });
  return injectElement({
    elem,
    placement: "head",
  }) as Promise<HTMLScriptElement>;
}

function injectCdtsWetScript({
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
      // Yes, eval is EVIL but it's the best solution here.
      eval(scriptEl.textContent);
      return;
    }

    // We need to create a new Script Element so that the browser
    // actually loads and evaluates the external script;
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
          resolve(elem);
        };
        document[placement].appendChild(elem);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function computeSoyScriptUrl(options: { version: CdtsVersion }) {
  const version = normalizeCdtsVersion(options.version);
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/soyutils.js`;
}

function computeCdtsWetScriptUrl(options: {
  version: CdtsVersion;
  language?: "en" | "fr" | null;
}) {
  const version = normalizeCdtsVersion(options.version);
  const language = options.language ?? "en";
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/cdts/compiled/wet-${language}.js`;
}

function computeJqueryScriptUrl(options: { version: CdtsVersion }) {
  const version = normalizeCdtsVersion(options.version);
  return `https://www.canada.ca/etc/designs/canada/cdts/gcweb/${version}/js/jquery/2.2.4/jquery.min.js`;
}

export function normalizeCdtsVersion(version: CdtsVersion) {
  if (version === "run" || version === "rn") return "rn";
  if (version.startsWith("v")) return version;
  return `v${version.replace(/\./g, "_")}`;
}

function computeElemId(elem: HTMLElement) {
  if (elem.id && elem.id.trim().length > 0) {
    return elem.id;
  }

  const dataId = elem.attributes.getNamedItem("data-id")?.value ?? "";
  if (dataId.trim().length > 0) {
    return dataId;
  }

  const url = (elem as HTMLLinkElement).href ?? (elem as HTMLScriptElement).src;
  if (url) {
    return urlToId(url);
  }

  return "id-" + Math.round(Math.random() * 1000); //?
}

/**
 * Uses the end of a url to form an id. Used by the injection functions to
 * ensure external scripts and css files are only loaded once.
 *
 * @export
 * @param {string} url the url to uniquely identify
 * @returns an id based on the last part of the url
 */
function urlToId(url: string) {
  return url.split("/").pop() ?? url;
}

export type CdtsVersion =
  | "run"
  | "rn"
  | `4.${number}.${number}`
  | `v4_${number}_${number}`;
