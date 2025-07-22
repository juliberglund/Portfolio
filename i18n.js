import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationSV from "./locales/sv/translation.json";

const resources = {
  en: { translation: translationEN },
  sv: { translation: translationSV },
};

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "sv",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
