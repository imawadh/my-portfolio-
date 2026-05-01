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
    <section className="min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="mb-12 relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-accent/30 shadow-2xl"
          >
            <Image 
              src="/awadh-about.jpg" 
              alt="Awadh Kishor Singh - Full Stack Developer Profile Picture" 
              fill 
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 160px, 192px"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%231e293b' width='400' height='400'/%3E%3C/svg%3E"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Welcome, I&apos;m {name}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-foreground font-heading leading-tight">
              <span className="text-gradient">{displayText}</span>
              <span className="animate-pulse text-accent font-light">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
            <span className="sr-only">Also known online as imawadh, im_awadh, im_awadh_</span>
          </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#projects"
            className="px-8 py-3.5 rounded-lg btn-primary font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            {ctaText} <ArrowRight size={20} />
          </Link>
          <a
            href="/Awadh Full Stack Developer Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg bg-secondary/50 text-foreground font-semibold hover:bg-secondary transition-all flex items-center gap-2 border border-accent/20"
          >
            View CV <FileText size={20} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <SocialLinks iconSize={24} />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce-slow"
      >
        <span className="text-xs uppercase tracking-widest font-semibold font-sans">Scroll</span>
        <Mouse size={20} className="text-accent" />
      </motion.div>
    </section>
  );
}
