"use client";

import { EVENT_DETAILS } from "@/lib/constants";
import { Users, Code, Lightbulb, MessageSquare, Award } from "lucide-react";
import { AnimatedCard } from "../ui/AnimatedCard";
import { SectionHeading } from "../ui/SectionHeading";

const iconMap = {
  Users: Users,
  Code: Code,
  Lightbulb: Lightbulb,
  MessageSquare: MessageSquare,
  Award: Award,
};

export function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-6">
      <div className="container mx-auto">
        <SectionHeading
          title="Event Highlights"
          subtitle="Everything you need to boost your technical journey."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EVENT_DETAILS.highlights.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <AnimatedCard
                key={index}
                // glowColor={item.color}
                className="flex flex-col h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
