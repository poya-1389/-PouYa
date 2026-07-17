"use client";

import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { location } from "@/lib/placeholders";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-ash sm:flex-row">
        <span className="font-display text-sm tracking-tight text-silver">
          <span className="text-gold">#</span>PouYa
        </span>

        <span className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {location}
        </span>

        <span>
          © {year} PouYa — {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}
