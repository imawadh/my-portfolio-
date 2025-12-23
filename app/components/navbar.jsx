"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#freelance-reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-5xl transition-all duration-300 bg-[#080808]/80 backdrop-blur-xl shadow-2xl border border-[#ffbf46]/20 rounded-full px-6 ${
          scrolled ? "border-[#ffbf46]/40 bg-[#080808]/90" : ""
        }`}
      >
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl sm:text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6] pl-2 font-[family-name:var(--font-signature)]">
              Awadh
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#ffbf46] transition-all duration-300 text-sm font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffbf46] to-[#66ced6] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 p-2"
            >
              <div className="bg-[#080808]/95 backdrop-blur-2xl border border-[#ffbf46]/20 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block w-full text-center px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-[#ffbf46]/10 hover:text-[#ffbf46] transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
