"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 18;

export default function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => i);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-void"
      aria-hidden="true"
    >
      {/* Aurora gradient wash */}
      <div className="absolute inset-0 bg-aurora-gold" />

      {/* Slow rotating conic glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #C9A15A 8%, transparent 18%, transparent 50%, #8A7140 58%, transparent 68%, transparent 100%)"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_10%,transparent_40%,rgba(8,9,11,0.9)_100%)]" />

      {/* Floating particles */}
      {particles.map((i) => {
        const left = (i * 137.5) % 100;
        const size = 2 + (i % 4);
        const duration = 8 + (i % 6) * 2;
        const delay = (i % 5) * 1.4;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: `${left}%`,
              bottom: "-5%",
              width: size,
              height: size,
              filter: "blur(0.5px)"
            }}
            animate={{
              y: ["0vh", "-110vh"],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
}
