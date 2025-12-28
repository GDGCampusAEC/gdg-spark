"use client";

import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/button";
import { Mic2, Target, Heart, Handshake } from "lucide-react";

export function Speakers() {
  const benefits = [
    { title: "Share Knowledge", icon: Mic2, color: "var(--color-google-blue)" },
    { title: "Build Brand", icon: Target, color: "var(--color-google-red)" },
    { title: "Connect", icon: Heart, color: "var(--color-google-yellow)" },
    { title: "Inspire Impact", icon: Handshake, color: "var(--color-google-green)" },
  ];

  return (
    <section id="speakers" className="py-24 bg-white dark:bg-black px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="Become a Speaker"
          subtitle="Inspire the next generation of developers and innovators."
        />
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Become a Speaker?</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                We believe great conversations begin with great people. Share your knowledge, ideas, and experiences with an enthusiastic audience of students and professionals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                    <benefit.icon size={20} style={{ color: benefit.color }} />
                    <span className="font-semibold text-sm">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-google-blue/5 border border-google-blue/10">
              <h4 className="text-xl font-bold mb-3 text-google-blue">What We Expect</h4>
              <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-2">
                  <span className="text-google-blue">•</span>
                  Deliver an engaging and insightful session
                </li>
                <li className="flex gap-2">
                  <span className="text-google-blue">•</span>
                  Share practical knowledge and industry perspectives
                </li>
                <li className="flex gap-2">
                  <span className="text-google-blue">•</span>
                  Interact with participants through Q&A
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center text-center p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border-2 border-dashed border-zinc-200 dark:border-zinc-800"
          >
            <div className="w-20 h-20 rounded-full bg-google-blue/10 flex items-center justify-center mb-6 text-google-blue">
              <Mic2 size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready to Speak?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
              If you are interested and available to be a speaker, we'd love to hear from you.
            </p>
            <Button size="lg" className="rounded-full bg-google-blue hover:bg-google-blue/90 px-10">
              Apply as Speaker
            </Button>
            <p className="mt-6 text-sm text-zinc-500">
              Contact us: <span className="font-semibold">{EVENT_DETAILS.contact.speakerEmail}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
