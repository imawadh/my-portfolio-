"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
        <Navbar />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 dark:to-blue-400">
                    My Projects
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A collection of my work, ranging from web applications to open source contributions.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group glass-card rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                    >
                         <Link href={`/projects/${project.slug}`} className="block relative h-48 overflow-hidden bg-muted/50">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                                <span className="text-sm">Project Preview</span>
                            </div>
                        </Link>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <Link href={`/projects/${project.slug}`} className="block">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            </Link>
                            <p className="text-muted-foreground mb-4 text-sm flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mt-auto">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                >
                                    <Github size={16} /> Code
                                </Link>
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </Link>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="ml-auto text-sm font-medium text-primary hover:underline"
                                >
                                    Details &rarr;
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <Footer />
    </main>
  );
}
