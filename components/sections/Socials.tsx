"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { socials } from "@/lib/placeholders";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Socials() {
  const { t } = useLanguage();

  return (
    <section id="connect" className="relative mx-auto max-w-5xl px-6 py-32">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-3 block text-center text-xs uppercase tracking-[0.35em] text-gold"
      >
        {t.socials.eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mb-16 text-center font-display text-4xl text-silver sm:text-5xl"
      >
        {t.socials.title}
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {socials.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.href || undefined}
            target={social.href ? "_blank" : undefined}
            rel={social.href ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="glass glass-reflection mouse-spotlight group flex aspect-square flex-col items-center justify-center gap-3 rounded-glass p-4 text-ash shadow-glass transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-glow-gold"
          >
            <SocialIcon
              icon={social.icon}
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xs tracking-wide">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
