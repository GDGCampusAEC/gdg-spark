"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 30,
  className = "",
}: MarqueeProps) {
  const scrollVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        variants={scrollVariants}
        animate="animate"
      >
        <div className="flex items-center gap-12 px-6">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
