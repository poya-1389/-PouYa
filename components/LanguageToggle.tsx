"use client";

import { Languages } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="glass glass-reflection group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 text-silver transition-all duration-300 hover:border-gold/40 hover:shadow-glow-gold"
    >
      <Languages className="h-4 w-4 text-gold transition-transform duration-500 group-hover:rotate-180" />
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-graphite text-[10px] font-semibold text-gold"
        >
          {t.langSwitch}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
