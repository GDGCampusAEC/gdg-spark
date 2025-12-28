"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../animations/TextReveal";
import { Button } from "../ui/button";
import FloatingLines from "../animations/FloatingLines";
import { EVENT_DETAILS } from "@/lib/constants";

export function Hero() {
  const linesGradient = [
    "#FBBC05",
    "#EA4335",
    "#4285F4",
    "#34A853"
  ];
  const linesGradientsDark = [
    "#800000",
    "#A52A2A",
    "#C07000",
    "#E11900",
    "#FF0000",
  ];


  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
<>
 <Threads amplitude={1} distance={0} enableMouseInteraction />
 </>
</div> */}

      <div className="w-screen absolute h-screen bg-white  overflow-hidden">
        <FloatingLines
          linesGradient={linesGradient}
          enabledWaves={['middle']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={3.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          mixBlendMode="normal"
        />
      </div>


      <div className="container mx-auto text-center z-10 pointer-events-none mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-zinc-200 px-4 py-1.5 text-sm font-medium text-google-blue dark:bg-zinc-900/50 dark:border-zinc-800"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
          </span>
          {EVENT_DETAILS.organizer}
        </motion.div>

        <h1 className="mb-4 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50">
          <span className="text-google-blue">S.</span>
          <span className="text-google-red">P.</span>
          <span className="text-google-yellow">A.</span>
          <span className="text-google-green">R.</span>
          <span className="text-google-blue">K.</span>
        </h1>

        <p className="mb-4 text-xl md:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
          {EVENT_DETAILS.fullName}
        </p>

        <TextReveal
          text={EVENT_DETAILS.tagline}
          className="mb-10 text-lg md:text-xl text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto justify-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
        >
          <Button size="lg" className="rounded-full bg-google-blue hover:bg-google-blue/90 px-8 text-white">
            {EVENT_DETAILS.cta.primary}
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-google-blue text-google-blue hover:bg-google-blue/10">
            {EVENT_DETAILS.cta.secondary}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        {/* <div className="w-px h-12 bg-gradient-to-b from-google-blue via-google-red to-google-yellow animate-bounce" /> */}
      </motion.div>
    </section>
  );
}
