"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

import certifications from "@/app/data/certifications.json";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Licenses & Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-2xl transition-all duration-300 border border-primary/10 hover:border-primary/40 h-full flex flex-col bg-white/40">
                 <div className="p-8 h-full flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                            <Award size={24} className="text-primary" />
                        </div>
                    </div>
                    
                    <h3 className="text-2xl text-foreground font-bold mb-3 leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6 text-sm font-medium">
                        <span className="px-3 py-1 bg-secondary text-primary rounded-full border border-primary/10">
                            {cert.instructor}
                        </span>
                        <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-full border border-border">
                            {cert.date}
                        </span>
                    </div>

                    <p className="mb-8 text-muted-foreground leading-relaxed grow">
                        {cert.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-border">
                        <Link 
                            href={cert.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors group/link"
                        >
                            View Certificate <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                 </div>
                 
                 {/* Decorative background gradient */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
