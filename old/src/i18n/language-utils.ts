const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "fr"] as const;
const LANG_KEY = "lang" as const;

export const languageCodePlacement = {
  QUERYSTRING: "querystring",
  PATH: "path",
} as const;

const DEFAULT_PLACEMENT = languageCodePlacement.PATH;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export type LanguageCodePlacement = typeof languageCodePlacement[keyof typeof languageCodePlacement]; //"querystring" | "url";
type LanguageKey = typeof LANG_KEY;

/**
 * Gets the ISO639-1 language code of the current page.
 *
 * @export
 * @returns {SupportedLanguage} The ISO639-1 language code of the current page.
 */
export function getCurrentLanguage(): SupportedLanguage | null {
  // The language of the current page should have been set by the lang-fix.js
  // script referenced from index.html so all we need to do here is return it.

  return getLanguageFromPath() ?? getLanguageFromQueryString() ?? null;
}

function getLanguageFromPath() {
  const page = new URL(window.location.href);
  let pathParams = page.pathname
    .split("/")
    .filter((param) => param.trim() !== "");

  const maybeLang = pathParams[0];

  if (SUPPORTED_LANGUAGES.includes(maybeLang as SupportedLanguage)) {
    return maybeLang as SupportedLanguage;
  }
}

function getLanguageFromQueryString() {
  const page = new URL(window.location.href);
  return page.searchParams.get(LANG_KEY) as SupportedLanguage | undefined;
}

/**
 * Gets the URL of the translated version of the current page.
 *
 * @export
 * @param {SupportedLanguage} currentLanguage The ISO639-1 language code
 * of the current page.
 *
 * @returns {string} The URL of the translated version.
 */
export function getTranslatedPage({
  currentLanguage,
  placement = DEFAULT_PLACEMENT,
  supportedLanguages = SUPPORTED_LANGUAGES,
  langKey = LANG_KEY,
}: {
  currentLanguage: SupportedLanguage;
  placement: LanguageCodePlacement;
  supportedLanguages?: Readonly<SupportedLanguage[]>;
  langKey?: LanguageKey;
}): string {
  const toggleLanguage = getOtherOfficialLanguage(currentLanguage);
  return placement === languageCodePlacement.QUERYSTRING
    ? setLanguageViaQuerystring(toggleLanguage, supportedLanguages, langKey)
    : setLanguageViaPath(toggleLanguage, supportedLanguages, langKey);
}

/**
 * Given the ISO639-1 language code of one official language,
 * returns the ISO639-1 language code of the other.
 *
 * @export
 * @param {SupportedLanguage} currentLanguage The ISO639-1 language code
 * of the current page.
 *
 * @returns {SupportedLanguage} The ISO639-1 language code of the other official language.
 */
export function getOtherOfficialLanguage(
  currentLanguage: SupportedLanguage
): SupportedLanguage {
  return currentLanguage === "en" ? "fr" : "en";
}

export function setLanguageViaQuerystring(
  language: SupportedLanguage,
  supportedLanguages: Readonly<SupportedLanguage[]>,
  langKey: LanguageKey
): string {
  const page = new URL(window.location.href);
  const supportedLanguage = ensureSupportedLanguage(
    language,
    supportedLanguages,
    DEFAULT_LANGUAGE
  );
  page.searchParams.set(langKey, supportedLanguage);
  return page.href;
}

// TODO: Refactor this mess.
export function setLanguageViaPath(
  language: SupportedLanguage,
  supportedLanguages: Readonly<SupportedLanguage[]>,
  langKey: LanguageKey
) {
  const page = new URL(window.location.href);
  let pathParams = page.pathname
    .split("/")
    .filter((param) => param.trim() !== "");

  const maybeLang = pathParams[0];

  if (supportedLanguages.includes(maybeLang as SupportedLanguage)) {
    pathParams = pathParams.map((param) =>
      param === maybeLang ? language : param
    );
  } else {
    pathParams = [language, ...pathParams];
  }

  if (page.searchParams.has(langKey)) {
    page.searchParams.delete(langKey);
  }

  return `${page.origin}/${pathParams.join("/")}${page.search}`;
}

function ensureSupportedLanguage(
  language: SupportedLanguage,
  supportedLanguages: Readonly<SupportedLanguage[]>,
  fallback: SupportedLanguage
) {
  return supportedLanguages.includes(language) ? language : fallback;
}
