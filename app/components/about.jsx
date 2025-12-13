"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 relative">
             <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden mx-auto shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <span className="text-sm">Profile Image Placeholder</span>
                </div>
             </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Hello! I&apos;m Awadh Kishor Singh, a passionate Full Stack Developer based in [Location]. 
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              My goal is to always build products that provide pixel-perfect, performant experiences. 
              I am a quick learner and always eager to take on new challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass-card rounded-lg hover:bg-accent/50 transition-colors">
                    <h3 className="font-bold text-xl mb-1 text-primary">5+</h3>
                    <span className="text-muted-foreground text-sm">Projects Completed</span>
                </div>
                <div className="p-4 glass-card rounded-lg hover:bg-accent/50 transition-colors">
                    <h3 className="font-bold text-xl mb-1 text-primary">1+</h3>
                    <span className="text-muted-foreground text-sm">Years Experience</span>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
