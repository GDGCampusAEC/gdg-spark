"use client";

import { motion } from "framer-motion";
import { EVENT_DETAILS } from "@/lib/constants";
import { Marquee } from "../animations/Marquee";
import { Button } from "../ui/button";
import { SectionHeading } from "../ui/SectionHeading";

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
        title="Our Sponsors & Speakers"
          subtitle="Empowering innovation through community support."
        />
        
        <div className="mb-20">
          <Marquee speed={40}>
            {EVENT_DETAILS.sponsors.map((sponsor, i) => (
              <div
                key={i}
                className="flex items-center justify-center transition-all duration-300 mx-8"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 md:h-16 w-auto object-contain max-w-[200px]"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">Become a <span className="text-google-blue">Sponsor</span></h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg">
                Unlock unparalleled visibility and impact by sponsoring the GDG On Campus Tech Bootcamp & Hackathon. Showcase your brand to a vibrant community of innovators.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { text: "Brand Visibility", color: "var(--color-google-blue)" },
                  { text: "Talent Acquisition", color: "var(--color-google-red)" },
                  { text: "Community Engagement", color: "var(--color-google-yellow)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full bg-google-blue hover:bg-google-blue/90 px-8">
                Partner with Us
              </Button>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <h4 className="text-xl font-bold mb-4">Contact for Inquiries</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-lg font-medium">{EVENT_DETAILS.contact.email}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-lg font-medium">{EVENT_DETAILS.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
