"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold">Featured Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-secondary/30 hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder-project.jpg"}
                  alt={project.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3C/svg%3E"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project source code"
                    className="p-2.5 rounded-lg bg-accent hover:bg-accent/80 text-primary-foreground transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project live demo"
                    className="p-2.5 rounded-lg bg-accent hover:bg-accent/80 text-primary-foreground transition-colors"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 grow leading-relaxed">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Case Study Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-sm"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent font-semibold border border-accent/30 hover:border-accent/60 transition-all"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
