"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { LearningOutcomes } from "@/components/sections/LearningOutcomes";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Sponsors } from "@/components/sections/Sponsors";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-google-blue/30">
      <Hero />
      <About />
      <Highlights />
      <LearningOutcomes />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Footer />
    </main>
  );
}
