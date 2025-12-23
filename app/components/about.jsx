"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import siteContent from "@/app/data/site-content.json";

export default function About() {
  const { title, paragraphs, image, stats } = siteContent.about;

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 relative">
             <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden mx-auto shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300 border-4 border-[#ffbf46]/20 bg-[#2d3142]">
                <Image
                  src={image}
                  alt="Profile Image"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6]">{title}</span>
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-zinc-300 mb-6 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-[#2d3142] rounded-lg hover:bg-[#2d3142]/80 transition-colors border border-[#ffbf46]/20">
                      <h3 className="font-bold text-xl mb-1 text-[#ffbf46]">{stat.value}</h3>
                      <span className="text-zinc-400 text-sm">{stat.label}</span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
