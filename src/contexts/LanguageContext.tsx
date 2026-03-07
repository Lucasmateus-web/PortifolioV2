import React, { createContext, useContext, useState, useCallback } from "react";
import { Lang, translations } from "@/i18n/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang?: Lang }> = ({
  children,
  initialLang = "en",
}) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  const t = useCallback(
    (key: string) => translations[lang]?.[key] || translations.en[key] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
