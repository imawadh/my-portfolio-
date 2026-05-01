"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./social-links";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Server returned non-JSON response: ${text.slice(0, 100)}`);
      }

      if (res.ok) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: null, error: data.message || "Failed to send message" });
      }
    } catch (err) {
      console.error("Frontend Form Error:", err);
      setStatus({ loading: false, success: null, error: `${err.message || "An unexpected error occurred."}` });
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-20"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Let&apos;s Connect</p>
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent border border-accent/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Email</h4>
                  <a href="mailto:awadhkishorsingh241@gmail.com" aria-label="Send email" className="text-muted-foreground hover:text-accent transition-colors">
                    awadhkishorsingh241@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent border border-accent/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Phone</h4>
                  <a href="tel:+917985000241" aria-label="Call" className="text-muted-foreground hover:text-accent transition-colors">
                    +91 7985000241
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent border border-accent/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Bengaluru, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-12"
            >
              <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="border border-accent/20 bg-secondary/30 p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                  <input 
                    required
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-accent/20 text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all placeholder:text-muted-foreground" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                  <input 
                    required
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-accent/20 text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all placeholder:text-muted-foreground" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground">Subject</label>
                <input 
                  required
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-accent/20 text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all placeholder:text-muted-foreground" 
                  placeholder="Project Inquiry" 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                <textarea 
                  required
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-accent/20 text-foreground focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all placeholder:text-muted-foreground resize-none" 
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                aria-label="Send Contact Message"
                suppressHydrationWarning
                className={`w-full py-3.5 btn-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status.success && (
                <p className="text-green-400 text-center text-sm font-medium mt-4">{status.success}</p>
              )}
              {status.error && (
                <p className="text-red-400 text-center text-sm font-medium mt-4">{status.error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
