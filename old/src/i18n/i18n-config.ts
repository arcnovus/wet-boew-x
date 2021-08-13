import i18n from "i18next";
import resources from "./translations.json";
import { initReactI18next } from "react-i18next";
import { getCurrentLanguage } from "./language-utils";

i18n.use(initReactI18next).init({
  lng: getCurrentLanguage() ?? "en",
  ns: ["languageToggle"],
  resources,
});
