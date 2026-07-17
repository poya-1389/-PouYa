"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Layers, Sparkles, LucideIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/lib/placeholders";
import GlassButton from "@/components/ui/GlassButton";

// Default icon cycle. Swap any entry for your own icon (e.g. an imported
// base44-generated SVG/image component) without changing the layout below.
const iconCycle: LucideIcon[] = [Boxes, Layers, Sparkles];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-3 block text-center text-xs uppercase tracking-[0.35em] text-gold"
      >
        {t.projects.eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mb-16 text-center font-display text-4xl text-silver sm:text-5xl"
      >
        {t.projects.title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = iconCycle[index % iconCycle.length];
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="mouse-spotlight glass glass-reflection group relative flex flex-col justify-between overflow-hidden rounded-glass p-8 shadow-glass transition-all duration-300 hover:border-gold/30 hover:shadow-glow-gold"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full glass border border-gold/20 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mb-2 font-display text-2xl text-silver">
                  {project.title}
                </h3>

                {project.description ? (
                  <p className="text-sm text-ash">{project.description}</p>
                ) : (
                  <p className="font-mono text-xs text-ash/50">
                    {"// description"}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <GlassButton
                  variant="ghost"
                  href={project.url || undefined}
                  icon={<ArrowUpRight className="h-4 w-4" />}
                  className="w-full justify-center"
                >
                  {t.projects.view}
                </GlassButton>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
