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
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#ffbf46]">
             <span className="bg-clip-text text-transparent bg-linear-to-r from-[#ffbf46] to-[#66ced6]">Get In Touch</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
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
            <h3 className="text-xl font-bold mb-6 text-white border-b border-[#ffbf46]/20 pb-2 inline-block">Contact Information</h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#2d3142] rounded-lg text-[#ffbf46] border border-[#ffbf46]/10">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-white">Email</h4>
                        <a href="mailto:srsclasses56@gmail.com" className="text-zinc-400 hover:text-[#ffbf46] transition-colors">
                            srsclasses56@gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-[#2d3142] rounded-lg text-[#ffbf46] border border-[#ffbf46]/10">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-white">Phone</h4>
                        <a href="tel:+917985000241" className="text-zinc-400 hover:text-[#ffbf46] transition-colors">
                            +91 7985000241
                        </a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-[#2d3142] rounded-lg text-[#ffbf46] border border-[#ffbf46]/10">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-medium mb-1 text-white">Location</h4>
                        <p className="text-zinc-400">
                            Yello Living, Extension Road, Pattandur Agrahara, Bengaluru, 560066
                        </p>
                    </div>
                </div>
            </div>

             <div className="mt-8">
                <h4 className="font-medium mb-4 text-white">Follow Me</h4>
                <SocialLinks />
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-[#2d3142] p-8 rounded-2xl shadow-lg border border-[#ffbf46]/20"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                        <input 
                          required
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleChange}
                          suppressHydrationWarning
                          className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-zinc-700 text-white focus:ring-2 focus:ring-[#ffbf46] focus:outline-none transition-all placeholder:text-zinc-600" placeholder="John Doe" 
                        />
                    </div>
                    <div>
                         <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                         <input 
                           required
                           type="email" 
                           id="email" 
                           value={formData.email}
                           onChange={handleChange}
                           suppressHydrationWarning
                           className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-zinc-700 text-white focus:ring-2 focus:ring-[#ffbf46] focus:outline-none transition-all placeholder:text-zinc-600" placeholder="john@example.com" 
                         />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                    <input 
                      required
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-zinc-700 text-white focus:ring-2 focus:ring-[#ffbf46] focus:outline-none transition-all placeholder:text-zinc-600" placeholder="Project Inquiry" 
                    />
                </div>
                <div>
                     <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                     <textarea 
                       required
                       id="message" 
                       rows={4} 
                       value={formData.message}
                       onChange={handleChange}
                       suppressHydrationWarning
                       className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-zinc-700 text-white focus:ring-2 focus:ring-[#ffbf46] focus:outline-none transition-all placeholder:text-zinc-600" placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status.loading}
                  suppressHydrationWarning
                  className={`w-full py-4 bg-linear-to-r from-[#ffbf46] to-[#66ced6] text-[#080808] font-bold rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>

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
