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

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="p-6 rounded-xl border border-accent/10 bg-secondary/30 hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 text-center group"
                >
                  <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative h-96 md:h-[480px] rounded-2xl overflow-hidden border-2 border-accent/10 shadow-2xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Image
                  src={image}
                  alt="Awadh Kishor Singh - Full Stack Developer"
                  fill
                  className="object-cover relative z-10"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 480'%3E%3Crect fill='%230a0e27' width='400' height='480'/%3E%3C/svg%3E"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
