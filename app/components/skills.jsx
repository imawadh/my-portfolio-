"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./spotlight-card";
import skills from "@/app/data/skills.json";

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
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6]">My Skills</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
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
             <SpotlightCard className="bg-[#2d3142]/30 border border-[#ffbf46]/10 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-[#ffbf46]/30 transition-all duration-300 h-full backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 text-[#ffbf46] flex items-center gap-2">
                    {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill) => (
                    <div
                        key={skill}
                        className="group flex items-center justify-center p-2 bg-[#080808]/50 rounded-lg border border-white/5 hover:border-[#ffbf46]/30 transition-all duration-300"
                    >
                        <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
                            {skill}
                        </span>
                    </div>
                    ))}
                </div>
             </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
