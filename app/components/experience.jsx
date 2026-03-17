"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import experienceData from "@/app/data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">Experience & Education</h2>
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-6">
          {/* Timeline central line for desktop */}
          <div className="hidden md:block timeline-line" />

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl bg-background transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl border border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                  {item.type === "work" ? (
                    <Briefcase className="text-primary w-5 h-5" />
                  ) : (
                    <GraduationCap className="text-primary w-5 h-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{item.organization}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
