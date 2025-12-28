"use client";

import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="Event Schedule"
          subtitle="A roadmap of our 3-day tech bootcamp and hackathon."
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {EVENT_DETAILS.schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-zinc-950 bg-google-blue z-10" 
                  style={{ backgroundColor: index === 0 ? 'var(--color-google-blue)' : index === 1 ? 'var(--color-google-red)' : index === 2 ? 'var(--color-google-yellow)' : 'var(--color-google-green)' }}
                />
                
                <div className="w-full md:w-1/2 px-8">
                  <div className={`p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm ${
                    index % 2 === 0 ? "text-left" : "md:text-right"
                  }`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                      item.type === "Online" 
                        ? "bg-google-blue/10 text-google-blue" 
                        : "bg-google-green/10 text-google-green"
                    }`}>
                      {item.type}
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h4>
                    <p className="text-google-blue font-semibold text-sm mb-3">{item.date}</p>
                    <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
