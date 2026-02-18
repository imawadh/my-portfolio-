"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./spotlight-card";
import skills from "@/app/data/skills.json";
import { getSkillIcon } from "@/app/lib/skill-icons";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
             <SpotlightCard className="glass-card rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                    {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill) => {
                      const Icon = getSkillIcon(skill);
                      return (
                        <div
                            key={skill}
                            className="group flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
                        >
                            {Icon && <Icon className="text-lg text-muted-foreground group-hover:text-primary transition-colors" />}
                            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {skill}
                            </span>
                        </div>
                      );
                    })}
                </div>
             </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
