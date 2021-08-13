import {
  getCurrentLanguage,
  getOtherOfficialLanguage,
  getTranslatedPage,
  languageCodePlacement,
  LanguageCodePlacement,
} from "./language-utils";

export function useLanguage(props?: { placement?: LanguageCodePlacement }) {
  const currentLanguage = getCurrentLanguage();
  const otherLanguage = getOtherOfficialLanguage(currentLanguage ?? "en");
  const placement = props?.placement ?? languageCodePlacement.PATH;
  const translatedPage = getTranslatedPage({
    currentLanguage: currentLanguage ?? "en",
    placement,
  });
  return { currentLanguage, otherLanguage, translatedPage };
}
