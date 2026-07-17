"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import GlassButton from "@/components/ui/GlassButton";

export default function Contact() {
  const { t } = useLanguage();

  // Wire this up to your own form handler / API route / mail service.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="mouse-spotlight relative mx-auto max-w-3xl px-6 py-32"
    >
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-3 block text-center text-xs uppercase tracking-[0.35em] text-gold"
      >
        {t.contact.eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mb-14 text-center font-display text-4xl text-silver sm:text-5xl"
      >
        {t.contact.title}
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="glass glass-reflection flex flex-col gap-5 rounded-glass p-8 shadow-glass sm:p-10"
      >
        <label className="glass flex items-center gap-3 rounded-full px-5 py-3 focus-within:border-gold/40">
          <User className="h-4 w-4 text-gold" />
          <input
            type="text"
            name="name"
            placeholder={t.contact.namePlaceholder}
            className="w-full bg-transparent text-sm text-silver placeholder:text-ash/60 focus:outline-none"
          />
        </label>

        <label className="glass flex items-center gap-3 rounded-full px-5 py-3 focus-within:border-gold/40">
          <Mail className="h-4 w-4 text-gold" />
          <input
            type="email"
            name="email"
            placeholder={t.contact.emailPlaceholder}
            className="w-full bg-transparent text-sm text-silver placeholder:text-ash/60 focus:outline-none"
          />
        </label>

        <label className="glass flex items-start gap-3 rounded-glass px-5 py-4 focus-within:border-gold/40">
          <MessageSquare className="mt-1 h-4 w-4 shrink-0 text-gold" />
          <textarea
            name="message"
            rows={4}
            placeholder={t.contact.messagePlaceholder}
            className="w-full resize-none bg-transparent text-sm text-silver placeholder:text-ash/60 focus:outline-none"
          />
        </label>

        <div className="flex justify-center pt-2">
          <GlassButton icon={<Send className="h-4 w-4" />}>
            {t.contact.send}
          </GlassButton>
        </div>
      </motion.form>
    </section>
  );
}
