"use client";

import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="About the Event"
          subtitle="A perfect blend of learning and hands-on implementation."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-200">
              What is <span className="text-google-blue">Tech Fest</span> Special?
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {EVENT_DETAILS.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-google-blue/10 text-google-blue px-4 py-2 rounded-full text-sm font-semibold border border-google-blue/20">
                Online Expert Sessions
              </div>
              <div className="bg-google-green/10 text-google-green px-4 py-2 rounded-full text-sm font-semibold border border-google-green/20">
                Offline Practical Workshop
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
          >
            <img
              src={"https://kista.com/wp-content/uploads/2024/11/GDG-Devfest.png"}
              alt="Tech Conference"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
