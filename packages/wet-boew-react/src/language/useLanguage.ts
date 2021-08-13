import { useEffect, useMemo, useState } from "react";
import {
  getLanguageFromUrl,
  Language,
  LanguagePlacement,
  translateUrl,
} from "./language";

export function useLanguage(options?: { placement?: LanguagePlacement }) {
  const [langProps, setLangProps] = useState<{
    currentLanguage?: Language | null;
    translatedPage?: URL;
  }>({});
  useEffect(() => {
    const placement = options?.placement ?? LanguagePlacement.PATH;
    const currentUrl = new URL(window.location.href);
    const currentLanguage = getLanguageFromUrl(currentUrl, {
      placement,
    });
    const translateOptions = {
      toLanguage: currentLanguage === Language.EN ? Language.FR : Language.EN,
      placement,
    };
    if (placement === LanguagePlacement.QUERYSTRING) {
      (translateOptions as any).queryStringKey = "lang";
    }
    const translatedPage = translateUrl(currentUrl, translateOptions);
    document.documentElement.lang = currentLanguage ?? "en";
    setLangProps({
      currentLanguage,
      translatedPage,
    });
  }, [options?.placement, window.location.href]);
  return langProps;
}
