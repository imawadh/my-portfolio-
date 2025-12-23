"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    type: "education",
    title: "BS in Data Science and Applications",
    organization: "IIT Madras",
    period: "May,2024 - March,2028",
    description: "Specialized in Data Science and Applications."
  },
  {
    type: "work",
    title: "Full Stack Free Lance",
    organization: "SRS Classes",
    period: "Nov,2024 - Present",
    description: "Developing full stack web applications for clients."
  },
  {
    type: "education",
    title: "Intermediate",
    organization: "Central Hindu Boys School",
    period: "May 2021 - March 2023",
    description: "Completed Higher Secondary Education."
  },
  {
    type: "education",
    title: "High School",
    organization: "PG Senoir Secondary School",
    period: "April 2019 - March 2021",
    description: "Completed Secondary School Education."
  },
];

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
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6]">Experience & Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
             {/* Vertical line */}
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-[#ffbf46]/20 md:left-1/2 md:-ml-0.5"></div>

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
                    <div className="z-10 w-18 h-18 rounded-full bg-[#2d3142] border-4 border-[#ffbf46] shadow-sm flex items-center justify-center p-3">
                         {item.type === 'work' ? <Briefcase className="text-[#ffbf46] w-6 h-6" /> : <GraduationCap className="text-[#ffbf46] w-6 h-6" />}
                    </div>
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 group">
                      <div className={`relative p-6 bg-[#2d3142]/40 backdrop-blur-sm border border-[#ffbf46]/10 rounded-xl hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} group-hover:border-[#ffbf46]/30`}>
                         <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#ffbf46] text-[#2d3142]">
                             {item.period}
                         </span>
                         <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                         <p className="text-zinc-300 font-medium mb-2">{item.organization}</p>
                         <p className="text-zinc-400 text-sm">
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
