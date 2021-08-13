import type { CdtsTopParams, Href } from ".";

export enum LanguagePlacement {
  PATH = "path",
  QUERYSTRING = "querystring",
}

export enum Language {
  EN = "en",
  FR = "fr",
}

type GetLanguageFromUrlOptions =
  | GetLanguageFromUrlPathOptions
  | GetLanguageFromUrlQueryStringOptions;

interface GetLanguageFromUrlPathOptions {
  placement?: LanguagePlacement.PATH;
  fallback?: Language;
}

interface GetLanguageFromUrlQueryStringOptions {
  placement?: LanguagePlacement.QUERYSTRING;
  fallback?: Language;
  queryStringKey?: string;
}

interface TranslateUrlPathOptions {
  toLanguage: Language;
  placement?: LanguagePlacement.PATH;
  queryStringKey?: never;
}

interface TranslateUrlQueryStringOptions {
  toLanguage: Language;
  placement: LanguagePlacement.QUERYSTRING;
  queryStringKey?: string;
}

type TranslateUrlOptions =
  | TranslateUrlPathOptions
  | TranslateUrlQueryStringOptions;
export function translateUrl(
  url: URL,
  { toLanguage, placement, queryStringKey }: TranslateUrlOptions
) {
  let translatedUrl = url;
  if (placement === LanguagePlacement.PATH) {
    let currentLanguage = getLanguageFromPath(url);
    if (currentLanguage != null) {
      translatedUrl.pathname = url.pathname.replace(
        "/" + currentLanguage,
        toLanguage
      );
    } else {
      translatedUrl.pathname = "/" + toLanguage + url.pathname;
    }
  }
  if (placement === LanguagePlacement.QUERYSTRING) {
    translatedUrl.searchParams.set(queryStringKey ?? "lang", toLanguage);
  }
  return translatedUrl;
}

export function getLanguageFromUrl(
  url: URL,
  options?: GetLanguageFromUrlOptions
): Language | null {
  let currentLanguage = null;

  if (options?.placement === LanguagePlacement.QUERYSTRING) {
    currentLanguage = getLanguageFromQueryString(url, options?.queryStringKey);
  }

  if (options?.placement === LanguagePlacement.PATH) {
    currentLanguage = getLanguageFromPath(url);
  }

  if (options?.placement == null) {
    currentLanguage =
      getLanguageFromPath(url) ??
      getLanguageFromQueryString(url) ??
      options?.fallback ??
      currentLanguage;
  }

  document.documentElement.lang = currentLanguage ?? Language.EN;

  return currentLanguage;
}

export function computeLngLinks(props: {
  languagePlacement?: LanguagePlacement;
}): CdtsTopParams["lngLinks"] {
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

export function setLanguage(language: Language) {
  document.documentElement.lang = language;
}

function getLanguageFromQueryString(
  url: URL,
  queryStringKey?: string
): Language | null {
  let key = queryStringKey ?? "lang";
  let lang = url.searchParams.get(key);
  return isLanguage(lang) ? lang : null;
}

// TODO: Handle custom basePaths
function getLanguageFromPath(url: URL): Language | null {
  let lang = url.pathname.split("/")[1];
  return isLanguage(lang) ? lang : null;
}

function isLanguage(lang: unknown): lang is Language {
  return Object.values(Language).includes(lang as Language);
}
