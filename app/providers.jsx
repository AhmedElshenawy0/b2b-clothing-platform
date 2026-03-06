"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export function Providers({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure i18n is initialized on client
    if (typeof window !== "undefined" && !i18n.isInitialized) {
      i18n.init().then(() => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <>{children}</>;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
