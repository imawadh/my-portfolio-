"use client";

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { Calendar, User, MapPin, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square rounded-2xl overflow-hidden glass-card border-2 border-primary/20"
             >
                 {/* Placeholder for Profile Image */}
                 <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <User size={64} className="text-muted-foreground" />
                 </div>
             </motion.div>

             <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
             >
                 <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                    My Journey
                 </h2>
                 <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        I'm Awadh Kishor Singh, a dedicated Full Stack Developer with a passion for building robust and scalable web applications. My journey in tech started with curiousity and has evolved into a career where I solve complex problems every day.
                    </p>
                    <p>
                        I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js, creating seamless digital experiences that users love. Whether it's crafting a pixel-perfect frontend or architecting a secure API, I approach every task with attention to detail.
                    </p>
                    <p>
                        When I'm not coding, you can find me [Hobby 1], [Hobby 2], or learning about the latest advancements in AI and web technologies.
                    </p>
                 </div>
                 
                 <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-3">
                         <MapPin className="text-primary" />
                         <span className="text-foreground font-medium">[Location]</span>
                     </div>
                     <div className="flex items-center gap-3">
                         <Briefcase className="text-primary" />
                         <span className="text-foreground font-medium">Available for hire</span>
                     </div>
                 </div>
             </motion.div>
        </div>

        {/* Timeline or More Info */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 rounded-2xl border border-border"
        >
             <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Why Work With Me?</h3>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h4 className="font-bold mb-2">Quality Driven</h4>
                    <p className="text-muted-foreground">Detailed code reviews, testing, and clean architecture are standard.</p>
                </div>
                 <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h4 className="font-bold mb-2">On Time Delivery</h4>
                    <p className="text-muted-foreground">I respect deadlines and communicate proactively throughout the project.</p>
                </div>
                 <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                    <h4 className="font-bold mb-2">Continuous Support</h4>
                    <p className="text-muted-foreground">I don&apos;t just disappear after launch. I&apos;m here for updates and maintenance.</p>
                </div>
             </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
