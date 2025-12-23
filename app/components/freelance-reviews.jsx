"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
           key={star}
           size={18}
           className={`${star <= rating ? "text-[#ffbf46] fill-[#ffbf46]" : "text-zinc-600"} transition-colors`} 
        />
      ))}
    </div>
  );
};

export default function FreelanceReviews() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/freelance-projects", { cache: "no-store" });
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;
  if (projects.length === 0) return null;

  return (
    <section id="freelance-reviews" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6]">
              Freelance Projects & Reviews
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Delivering high-quality solutions for clients worldwide. Here's what they have to say.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2d3142]/40 backdrop-blur-md rounded-3xl border border-[#ffbf46]/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left Side: Preview Area */}
              <div className="md:w-1/2 p-1 bg-[#080808]/50 flex flex-col">
                <div className="flex-grow flex items-center justify-center min-h-[250px] relative group overflow-hidden bg-zinc-900/50 m-4 rounded-2xl border border-white/5">
                   {project.image ? (
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                   ) : (
                     <div className="text-zinc-500 text-center p-8">
                          <ExternalLink size={48} className="mx-auto mb-4 opacity-20" />
                          <p className="text-sm font-medium">{project.title}</p>
                          <p className="text-xs opacity-50">Website Preview</p>
                     </div>
                   )}
                   
                   <div className="absolute inset-0 bg-[#080808]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#2d3142] rounded-full text-white hover:text-[#ffbf46] transition-colors border border-white/10">
                            <Github size={24} />
                        </a>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#ffbf46] rounded-full text-[#080808] hover:scale-110 transition-transform">
                            <ExternalLink size={24} />
                        </a>
                   </div>
                </div>
                
                <div className="px-8 pb-6 flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <Github size={16} />
                        <span className="text-xs font-medium">Source Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#66ced6]">
                        <div className="w-2 h-2 rounded-full bg-[#66ced6] animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest">Live Site</span>
                    </div>
                </div>
              </div>

              {/* Right Side: Review Area */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
                {project.isReviewed ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2 text-[#ffbf46]">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-bold uppercase tracking-tighter">Verified Review</span>
                        </div>
                        <StarRating rating={project.rating} />
                    </div>
                    
                    <blockquote className="text-xl italic text-white leading-relaxed font-medium">
                      "{project.reviewText}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffbf46] to-[#66ced6] flex items-center justify-center text-[#080808] font-bold text-xl">
                            {project.clientName?.[0] || "C"}
                        </div>
                        <div>
                            <p className="text-white font-bold">{project.clientName || "Client"}</p>
                            <p className="text-zinc-500 text-sm">{project.clientDesignation || "Review from Founding Member"}</p>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-[#ffbf46]/10 rounded-full flex items-center justify-center mx-auto text-[#ffbf46]">
                        <MessageSquare size={36} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Pending Client Review</h3>
                        <p className="text-zinc-400">This project has been delivered. Waiting for client feedback.</p>
                    </div>
                    <Link
                      href={`/review/${project._id}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ffbf46] to-[#66ced6] text-[#080808] font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,191,70,0.4)] transition-all hover:scale-105"
                    >
                      <Star size={20} />
                      Leave a Review
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
