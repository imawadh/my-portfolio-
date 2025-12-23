"use client";

import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";
import Link from "next/link";
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
    <section className="h-screen flex items-center justify-center pt-16 overflow-hidden relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-wider text-[#ffbf46] uppercase mb-2 block">
            {welcomeText}
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 text-white">
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ffbf46] to-[#66ced6]">{name}</span>
          </h1>
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl font-medium text-zinc-400">
              I am a {displayText}
              <span className="animate-pulse text-[#ffbf46]">|</span>
            </span>
          </div>
          
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
            <Link
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              {ctaText} <ArrowRight size={20} />
            </Link>
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
    </section>
  );
}
