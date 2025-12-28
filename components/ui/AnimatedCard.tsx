"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function AnimatedCard({
  children,
  className = "",
  glowColor = "rgba(66, 133, 244, 0.2)",
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`relative group bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm transition-shadow hover:shadow-sm dark:bg-zinc-900 dark:border-zinc-800 ${className}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: `0 0 20px 2px ${glowColor}`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
