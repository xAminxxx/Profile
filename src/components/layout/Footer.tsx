"use client";

import { Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} {profile.name}. {t.footer.rights}
          </p>

          {/* Built with */}
          <p className="text-gray-500 dark:text-gray-500 text-xs flex items-center gap-1">
            {t.footer.builtWith} <Heart className="w-3 h-3 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
