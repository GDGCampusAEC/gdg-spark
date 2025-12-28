"use client";

import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function LearningOutcomes() {
  return (
    <section className="py-24 bg-white dark:bg-black px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="Learning Outcomes"
          subtitle="What you'll achieve by the end of this bootcamp."
        />
        
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {EVENT_DETAILS.learningOutcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="mt-1 text-google-green">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
