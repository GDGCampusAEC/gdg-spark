"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"],
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Highlights", href: "#highlights" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/gdg_logo.jpeg"
                alt="GDG Spark Logo"
                width={70}
                height={50}
                className="cursor-pointer w-12 h-auto"
                onClick={() => scrollToSection("#top")}
              />
              <div className="ml-3 flex flex-col flex-1 justify-center leading-0.5 h-full">
                <p className=" text-base">Google Developer Groups</p>
                <p className="text-xs text-gray-800">
                  On Campus Asansol Engineering College
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-google-blue dark:hover:text-google-blue transition-colors duration-200 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-google-blue group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </motion.div>

            {/*<Button
                size="sm"
                className="rounded-full  text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Register Now
              </Button>*/}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-google-blue transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-18 left-0 right-0 z-40 md:hidden overflow-hidden bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-white hover:bg-linear-to-r hover:from-google-blue hover:to-google-red rounded-lg transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                {link.name}
              </motion.button>
            ))}
            {/*<motion.div
              className="mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="w-full rounded-full bg-linear-to-r from-google-blue to-google-red hover:from-google-red hover:to-google-yellow text-white font-semibold shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Button>
            </motion.div>*/}
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
