"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import siteContent from "@/app/data/site-content.json";

export default function About() {
  const { title, paragraphs, image, stats } = siteContent.about;

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">About</p>
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold">{title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative h-96 md:h-[480px] rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
                <Image
                  src={image}
                  alt="Awadh Kishor Singh - Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%231e293b' width='400' height='400'/%3E%3C/svg%3E"
                />
              </div>
              {/* Decorative badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-background border border-accent/30 rounded-xl shadow-xl p-6 flex items-center gap-4"
              >
                <div>
                  <p className="text-3xl font-heading font-bold text-gradient">{stats[0]?.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stats[0]?.label}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="p-5 rounded-xl border border-accent/20 bg-secondary/30 hover:bg-secondary/50 hover:border-accent/40 transition-all duration-300 text-center group"
                >
                  <p className="font-heading text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</p>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
