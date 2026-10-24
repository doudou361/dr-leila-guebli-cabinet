"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

export function Reveal({ children, delayMs = 0, className = "" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: 0.6,
        delay: delayMs / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
