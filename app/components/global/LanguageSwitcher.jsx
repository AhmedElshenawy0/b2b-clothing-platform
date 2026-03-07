"use client";

import { GlobalOutlined } from "@ant-design/icons";

export const LanguageSwitcher = () => {
  const toggleLanguage = () => {
    alert("Language switching will be implemented soon!");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm active:scale-95"
    >
      <GlobalOutlined className="text-slate-500" />
      <span className="text-[11px] font-black text-slate-700 uppercase">
        العربية
      </span>
    </button>
  );
};
