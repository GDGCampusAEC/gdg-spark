"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../animations/TextReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12  ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-2xl`}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl text-center md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          <TextReveal text={title} />
        </h2>
        {subtitle && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </motion.div>
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-google-blue ${
          align === "center" ? "mx-auto" : ""
        } flex gap-1 overflow-hidden`}
      >
        <div className="h-full w-1/4 bg-google-blue" />
        <div className="h-full w-1/4 bg-google-red" />
        <div className="h-full w-1/4 bg-google-yellow" />
        <div className="h-full w-1/4 bg-google-green" />
      </div>
    </div>
  );
}
