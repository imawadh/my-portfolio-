"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SpotlightCard } from "./spotlight-card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6]">Featured Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on recently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="group bg-[#2d3142] border border-[#ffbf46]/20 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#ffbf46] transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden bg-black/50">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-500 group">
                      <Image
                        src={project.image || "/placeholder-project.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ffbf46] transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-4 text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center gap-1 text-[10px] px-2 py-1 bg-[#080808]/50 border border-[#ffbf46]/10 rounded-md text-zinc-300 hover:border-[#ffbf46]/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[#ffbf46] hover:opacity-80 transition-opacity"
                    >
                      <Github size={16} /> Code
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[#ffbf46] hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                     <Link
                        href={`/projects/${project.slug}`}
                        className="ml-auto text-sm font-medium text-[#ffbf46] hover:underline"
                    >
                        View Case Study &rarr;
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
