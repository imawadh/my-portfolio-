"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Link from "next/link";

import certifications from "@/app/data/certifications.json";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ffbf46] to-[#66ced6]">Licenses & Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${cert.color} ${cert.textColor} h-full border border-[#ffbf46]/20 hover:border-[#ffbf46]`}>
                 <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-1 px-2 bg-[#ffbf46]/10 rounded border border-[#ffbf46]/20">
                            <Award size={18} className="text-[#ffbf46]" />
                        </div>
                    </div>
                    
                    <h3 className="text-2xl text-[#ffbf46] font-bold mb-2 leading-tight">{cert.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4 text-sm font-medium opacity-90">
                        <span className="px-3 py-1 bg-black/10 rounded-full backdrop-blur-md">
                            {cert.instructor}
                        </span>
                        <span className="px-3 py-1 bg-black/10 rounded-full backdrop-blur-md">
                            {cert.date}
                        </span>
                    </div>

                    <p className="mb-6 opacity-90 font-medium">
                        {cert.description}
                    </p>

                    <div className="mt-auto">
                        <Link 
                            href={cert.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-bold hover:underline"
                        >
                            View Certificate <ExternalLink size={18} />
                        </Link>
                    </div>
                 </div>

                 {/* Verified Footer */}
                 <div className="bg-black/20 backdrop-blur-md px-6 py-3 flex justify-between items-center">
                    <span className="font-medium">Verified Credential</span>
                    <span className="flex items-center gap-1.5 font-bold">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                        Valid
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
