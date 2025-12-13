"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] }, // Add more as appropriate
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

import { SpotlightCard } from "./spotlight-card";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
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
             <SpotlightCard className="glass-card rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                    >
                        {skill}
                    </span>
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
