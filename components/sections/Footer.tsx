"use client";

import { EVENT_DETAILS } from "@/lib/constants";
import { Github, Twitter, Linkedin, Instagram, Mail ,Globe} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black py-16 px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tight mb-2">
              <span className="text-google-blue">GDG</span> On Campus
            </h2>
            <p className="text-zinc-500 font-medium">Asansol Engineering College</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              {[
                { icon: Twitter, href: "https://www.twitter.com/GDGCampusAEC", color: "hover:text-[#1DA1F2]" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/gdgcampusaec", color: "hover:text-[#0A66C2]" },
                { icon: Globe, href: "https://gdg.community.dev/gdg-on-campus-asansol-engineering-college-asansol-india/", color: "hover:text-black dark:hover:text-white" },
                // { icon: Github, href: "#", color: "hover:text-black dark:hover:text-white" },
                // { icon: Instagram, href: "#", color: "hover:text-[#E4405F]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`text-zinc-400 transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${EVENT_DETAILS.contact.email}`}
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-google-blue transition-colors font-medium"
            >
              <Mail size={18} />
              {EVENT_DETAILS.contact.email}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-50 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400 font-medium">
          <p>© {currentYear} {EVENT_DETAILS.organizer}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://gdg.community.dev/gdg-on-campus-asansol-engineering-college-asansol-india/" className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="https://gdg.community.dev/gdg-on-campus-asansol-engineering-college-asansol-india/" className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
