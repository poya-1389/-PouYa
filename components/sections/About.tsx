"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Code2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import GlassButton from "@/components/ui/GlassButton";

export default function About() {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      id="about"
      className="mouse-spotlight relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32"
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-xs uppercase tracking-[0.35em] text-gold"
      >
        {t.about.eyebrow}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass glass-reflection w-full rounded-glass p-10 shadow-glass sm:p-14"
      >
        <div className="mb-6 flex items-center gap-2 text-ash">
          <Code2 className="h-4 w-4 text-gold" />
          <span className="font-mono text-xs">about.tsx</span>
        </div>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.p
              key="content"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="min-h-[4rem] font-mono text-sm leading-relaxed text-silver/80 sm:text-base"
            >
              {t.about.placeholder}
            </motion.p>
          ) : (
            <motion.div
              key="hidden"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="min-h-[4rem] select-none font-mono text-sm text-silver/20 blur-[6px] sm:text-base"
            >
              {t.about.placeholder}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8">
          <GlassButton
            variant="ghost"
            icon={revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            onClick={() => setRevealed((r) => !r)}
          >
            {revealed ? t.about.hide : t.about.reveal}
          </GlassButton>
        </div>
      </motion.div>
    </section>
  );
}
