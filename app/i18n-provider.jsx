"use client";

import { useEffect, useState } from "react";

export default function I18nProvider({ children }) {
  const [i18n, setI18n] = useState(null);
  const [I18nextProvider, setI18nextProvider] = useState(null);

  useEffect(() => {
    // Import ONLY inside effect on client side
    Promise.all([
      import("./i18n").then((m) => m.default),
      import("react-i18next").then((m) => m.I18nextProvider),
    ]).then(([i18nInstance, Provider]) => {
      setI18n(i18nInstance);
      setI18nextProvider(() => Provider);
    });
  }, []);

  if (!i18n || !I18nextProvider) return <>{children}</>;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
