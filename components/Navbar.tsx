"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

const sections = ["about", "work", "connect", "contact"] as const;

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="fixed inset-x-0 top-6 z-50 mx-auto flex w-fit max-w-[92vw] items-center gap-1 rounded-full px-2 py-2 glass glass-reflection shadow-glass"
    >
      {sections.map((key) => (
        <a
          key={key}
          href={`#${key}`}
          className="rounded-full px-4 py-2 text-sm text-ash transition-colors duration-300 hover:bg-white/5 hover:text-gold"
        >
          {t.nav[key]}
        </a>
      ))}
      <div className="ms-1">
        <LanguageToggle />
      </div>
    </motion.nav>
  );
}
