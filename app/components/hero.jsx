"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLinks from "./social-links";
import { BackgroundBeams } from "./background-beams";

const texts = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
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
    <section className="h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      <BackgroundBeams />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 dark:to-blue-400">Awadh Kishor Singh</span>
          </h1>
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl font-medium text-muted-foreground">
              I am a {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground mx-auto">
            Passionate about building scalable web applications and intuitive user interfaces.
            Turning ideas into reality through code.
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
              View My Work <ArrowRight size={20} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass border border-input hover:bg-accent hover:text-accent-foreground transition-colors font-medium flex items-center gap-2"
            >
              Download CV <Download size={20} />
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
    </section>
  );
}
