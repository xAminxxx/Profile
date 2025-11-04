"use client";

import { useI18n } from "@/i18n/context";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setLocale("en")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === "en"
              ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLocale("de")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === "de"
              ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
          aria-label="Auf Deutsch umschalten"
        >
          DE
        </button>
      </div>
    </div>
  );
}
