"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

import experienceData from "@/app/data/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Experience & Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
             {/* Vertical line */}
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                 {/* Icon */}
                <div className="absolute left-0 md:static md:w-1/2 flex justify-center">
                    <div className="z-10 w-18 h-18 rounded-full bg-background border-4 border-primary shadow-sm flex items-center justify-center p-3">
                         {item.type === 'work' ? <Briefcase className="text-primary w-6 h-6" /> : <GraduationCap className="text-primary w-6 h-6" />}
                    </div>
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 group">
                      <div className={`relative p-6 glass-card bg-white/40 border border-primary/10 rounded-xl hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} group-hover:border-primary/30`}>
                         <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary text-primary-foreground">
                             {item.period}
                         </span>
                         <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                         <p className="text-muted-foreground font-medium mb-2">{item.organization}</p>
                         <p className="text-muted-foreground text-sm">
                             {item.description}
                         </p>
                      </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
