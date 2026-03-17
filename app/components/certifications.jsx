"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import certifications from "@/app/data/certifications.json";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-3">Verified Learning</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">Licenses & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col border border-border rounded-2xl p-6 bg-background hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-secondary border border-border group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                  <Award size={20} className="text-primary" />
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">{cert.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">{cert.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{cert.instructor}</p>
              <p className="text-sm text-muted-foreground leading-relaxed grow mb-5">{cert.description}</p>

              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link mt-auto pt-4 border-t border-border"
              >
                View Certificate
                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
