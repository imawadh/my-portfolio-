"use client";

import { motion } from "framer-motion";
import skills from "@/app/data/skills.json";
import { getSkillIcon } from "@/app/lib/skill-icons";

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold mb-8">Skills & Technologies</h2>
        </motion.div>

        {/* Marquee Banner */}
        <div className="relative flex overflow-hidden w-full mb-16 mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4 px-4 overflow-visible">
            {[...skills.flatMap(s => s.items), ...skills.flatMap(s => s.items)].map((skill, i) => {
              const Icon = getSkillIcon(skill);
              return (
                <div key={`${skill}-${i}`} className="flex items-center gap-2 text-xl font-medium text-muted-foreground/50 hover:text-foreground transition-colors shrink-0">
                  {Icon && <Icon className="text-2xl" />}
                  {skill}
                  <span className="text-primary/30 mx-4">•</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-6 border border-accent/20 bg-secondary/30 hover:bg-secondary/50 hover:border-accent/40 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block group-hover:scale-150 transition-transform"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 px-3 py-2 border border-accent/20 rounded-lg text-xs font-medium text-muted-foreground hover:border-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-200"
                    >
                      {Icon && <Icon className="text-sm text-muted-foreground group-hover:text-accent" />}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
