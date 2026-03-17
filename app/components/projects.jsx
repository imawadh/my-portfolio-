"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border rounded-2xl overflow-hidden bg-background hover:border-primary/30 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image with hover overlay */}
              <div className="relative h-52 overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder-project.jpg"}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Slide-up hover overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-background/95 backdrop-blur-sm p-4 flex items-center gap-3 border-t border-border">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </Link>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto text-xs font-semibold text-primary hover:underline"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>

              <div className="p-5 flex flex-col grow">
                <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-1 bg-secondary rounded-full text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-muted text-foreground font-semibold border border-border transition-all"
          >
            View All Projects
            <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
