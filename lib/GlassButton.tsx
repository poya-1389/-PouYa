"use client";

import { useState, MouseEvent, ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

type Ripple = { id: number; x: number; y: number; size: number };

type GlassButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  as?: ElementType;
  variant?: "solid" | "ghost";
  className?: string;
};

export default function GlassButton({
  children,
  icon,
  href,
  onClick,
  variant = "solid",
  className = ""
}: GlassButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 650);
  };

  const base =
    "ripple glass-reflection relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const variantClasses =
    variant === "solid"
      ? "glass-strong text-silver shadow-glass hover:shadow-glow-gold hover:border-gold/40 hover:-translate-y-0.5"
      : "glass text-ash hover:text-silver hover:border-gold/30 hover:-translate-y-0.5";

  const content = (
    <>
      {icon && <span className="text-gold">{icon}</span>}
      <span>{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-circle"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </>
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    spawnRipple(e);
    onClick?.();
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        whileTap={{ scale: 0.96 }}
        className={`${base} ${variantClasses} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variantClasses} ${className}`}
    >
      {content}
    </motion.button>
  );
}
