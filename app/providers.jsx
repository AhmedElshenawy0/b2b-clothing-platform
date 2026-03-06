"use client";

import dynamic from "next/dynamic";

const I18nProvider = dynamic(() => import("./i18n-provider"), {
  ssr: false,
});

export function Providers({ children }) {
  return <I18nProvider>{children}</I18nProvider>;
}
