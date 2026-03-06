"use client";

import { I18nextProvider } from "react-i18next";

export default function I18nProvider({ children }) {
  // Dynamic import only runs on client side
  const i18n = require("./i18n").default;
  
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
