"use client";

import { motion } from "framer-motion";
import SocialLinks from "./social-links";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-foreground">Email</h4>
                        <a href="mailto:contact@awadhkishor.com" className="text-muted-foreground hover:text-primary transition-colors">
                            contact@awadhkishor.com
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-foreground">Phone</h4>
                        <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                            +91 9876543210
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-foreground">Location</h4>
                        <p className="text-muted-foreground">
                            [City, State, Country]
                        </p>
                    </div>
                </div>
            </div>

             <div className="mt-8">
                <h4 className="font-medium mb-4 text-foreground">Follow Me</h4>
                <SocialLinks />
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="glass-card p-8 rounded-2xl shadow-lg border border-border"
          >
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Name</label>
                        <input suppressHydrationWarning type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground" placeholder="John Doe" />
                    </div>
                    <div>
                         <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                         <input suppressHydrationWarning type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground" placeholder="john@example.com" />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                    <input suppressHydrationWarning type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground" placeholder="Project Inquiry" />
                </div>
                <div>
                     <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Message</label>
                     <textarea suppressHydrationWarning id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-muted-foreground" placeholder="Tell me about your project..."></textarea>
                </div>
                <button suppressHydrationWarning type="submit" className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                    Send Message
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
