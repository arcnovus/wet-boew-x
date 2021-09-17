import type { CdtsTopParams, Href } from ".";
import { inBrowser } from "./dom";

export enum Language {
  EN = "en",
  FR = "fr",
}

export function setLanguage({ language }: { language: Language }) {
  if (inBrowser()) {
    window.document.documentElement.lang = language;
  }
}
export function getCurrentLanguage(props?: {
  pathname?: string;
  search?: string;
}) {
  const pathname =
    props?.pathname ?? (inBrowser() ? window.location.pathname : undefined);

  const search =
    props?.search ?? (inBrowser() ? window.location.search : undefined);

  if (
    pathname?.includes(`/${Language.EN}/`) ||
    search?.includes(`lang=${Language.EN}`)
  ) {
    return Language.EN;
  }

  if (
    pathname?.includes(`/${Language.FR}/`) ||
    search?.includes(`lang=${Language.FR}`)
  ) {
    return Language.FR;
  }

  return null;
}

export function computeLngLinks(
  props: {
    currentLanguage?: Language | null;
    translatedPage?: Href;
  } = {}
): Required<CdtsTopParams["lngLinks"]> {
  const currentLanguage =
    props.currentLanguage ?? getCurrentLanguage() ?? Language.EN;
  const translatedPage = getTranslatedPage({ ...props, currentLanguage });
  return [
    {
      lang: currentLanguage === Language.FR ? Language.EN : Language.FR,
      href: translatedPage,
      text: currentLanguage === Language.FR ? "English" : "Français",
    },
  ];
}

function getTranslatedPage(
  props: {
    currentLanguage?: Language | null;
    translatedPage?: Href;
  } = {}
) {
  if (props?.translatedPage == null) {
    if (props?.currentLanguage === Language.FR) {
      return "/en/";
    }
    return "/fr/";
  }
  return props.translatedPage;
}
