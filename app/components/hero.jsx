"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Mouse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialLinks from "./social-links";


import siteContent from "@/app/data/site-content.json";

const { welcomeText, name, roles, description, ctaText } = siteContent.hero;

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[textIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentFullText.substring(
            0,
            displayText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-accent font-semibold tracking-widest uppercase text-xs mb-6"
            >
              👋 Welcome, I&apos;m {name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl sm:text-7xl font-bold tracking-tight mb-8 text-foreground leading-tight"
            >
              <span className="text-gradient">{displayText}</span>
              <span className="animate-pulse text-accent ml-2">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#projects"
                className="px-8 py-3.5 rounded-lg btn-primary font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                {ctaText} <ArrowRight size={20} />
              </Link>
              <a
                href="/Awadh Full Stack Developer Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-lg bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 border border-accent/20 hover:border-accent/40"
              >
                View CV <FileText size={20} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12"
            >
              <SocialLinks iconSize={24} />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-accent/20 shadow-2xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-xl opacity-30"></div>
              <Image 
                src="/awadh-about.jpg" 
                alt="Awadh Kishor Singh - Full Stack Developer Profile Picture" 
                fill 
                className="object-cover relative z-10" 
                priority
                sizes="(max-width: 768px) 320px, 320px"
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 480'%3E%3Crect fill='%230a0e27' width='400' height='480'/%3E%3C/svg%3E"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce-slow"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
        <Mouse size={20} className="text-accent" />
      </motion.div>
    </section>
  );
}
