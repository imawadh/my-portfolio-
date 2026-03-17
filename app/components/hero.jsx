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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/20 bg-primary/10"
        >
          <Image src="/awadh-about.jpg" alt="Awadh Profile" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            {welcomeText} I am {name}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-foreground font-heading leading-tight max-w-4xl">
            A passionate <span className="text-gradient">{displayText}</span>
            <span className="animate-pulse text-primary font-sans font-light delay-75">|</span><br />
            based in Bengaluru.
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground mx-auto font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
            <Link
              href="#projects"
              className="px-8 py-3.5 rounded-full btn-primary font-medium flex items-center gap-2"
            >
              {ctaText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/Awadh Full Stack Developer Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-muted transition-all flex items-center gap-2 border border-border"
            >
              Open My CV <FileText size={20} />
            </a>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
        >
            <SocialLinks iconSize={28} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce-slow"
      >
        <span className="text-xs uppercase tracking-widest font-semibold font-sans">Scroll</span>
        <Mouse size={20} className="text-primary" />
      </motion.div>
    </section>
  );
}
