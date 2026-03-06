"use client";

import { useState, useEffect } from "react";
import { GlobalOutlined } from "@ant-design/icons";

export const LanguageSwitcher = () => {
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    setCurrentLocale(localStorage.getItem("lang") || "en");
  }, []);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLocale);
    window.location.reload(); // إعادة تحميل لتحديث كل القواميس في الصفحات
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95"
    >
      <GlobalOutlined className="text-slate-500" />
      <span className="text-[11px] font-black text-slate-700 uppercase">
        {currentLocale === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
};
