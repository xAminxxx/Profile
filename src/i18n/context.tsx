"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { Translations } from "./locales/en";

type Locale = "en" | "de";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations = { en, de };

export function I18nProvider({ children }: { children: ReactNode }) {
  // Initialize with saved locale or default to 'en'
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale;
      if (saved && (saved === "en" || saved === "de")) {
        return saved;
      }
    }
    return "en";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
