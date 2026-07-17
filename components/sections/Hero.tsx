"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Signature element: thin rotating gold halo behind the name */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-[38vmax] w-[38vmax] rounded-full border border-gold/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-glow-gold" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute h-[46vmax] w-[46vmax] rounded-full border border-white/[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 75, ease: "linear", repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative select-none font-display text-[clamp(3.5rem,14vw,10rem)] font-medium leading-none tracking-tight text-silver"
      >
        <span className="text-gold">#</span>PouYa
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ash"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}
