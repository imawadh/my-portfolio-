"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import siteContent from "@/app/data/site-content.json";

export default function About() {
  const { title, paragraphs, image, stats } = siteContent.about;

  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">{title}</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 relative flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={image}
                  alt="Profile Image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-5 -right-5 bg-background border border-border rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <span className="text-2xl font-heading font-bold text-gradient">{stats[0]?.value}</span>
                <span className="text-xs text-muted-foreground leading-tight max-w-[80px]">{stats[0]?.label}</span>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-7/12"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground mb-5 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="p-5 rounded-2xl border border-border bg-secondary hover:border-primary/40 transition-all duration-300 text-center group"
                >
                  <h3 className="font-heading text-2xl font-bold text-gradient mb-1">{stat.value}</h3>
                  <span className="text-muted-foreground text-xs">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
