import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./messages/en.json";
import ar from "./messages/ar.json";

// Only initialize on client side
if (typeof window !== "undefined" && !i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ar: { translation: ar },
      },
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
}

export default i18n;
