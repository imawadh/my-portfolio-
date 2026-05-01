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
          className="mb-20"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Client Work</p>
          <h2 className="text-5xl md:text-6xl font-heading text-foreground font-bold">
            Freelance Projects <span className="text-gradient">&amp; Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Delivering high-quality solutions for clients worldwide. Here&apos;s what they have to say.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || project.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-accent/10 bg-secondary/40 hover:bg-secondary/60 hover:border-accent/30 overflow-hidden flex flex-col md:flex-row shadow-lg transition-all duration-300"
            >
              {/* Left Side: Preview Area */}
              <div className="md:w-1/2 p-6 flex flex-col">
                <div className="flex-1 flex items-center justify-center min-h-64 relative group overflow-hidden bg-muted rounded-xl border border-accent/10">
                   {project.image ? (
                     <img
                       src={project.image} 
                       alt={project.title} 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                   ) : (
                     <div className="text-muted-foreground text-center p-8">
                          <ExternalLink size={48} className="mx-auto mb-4 opacity-20" />
                          <p className="text-sm font-medium">{project.title}</p>
                          <p className="text-xs opacity-50">Website Preview</p>
                     </div>
                   )}
                   
                   <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View freelance project on GitHub" className="p-3 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent border border-accent/30 transition-all">
                            <Github size={24} />
                        </a>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit freelance project website" className="p-3 bg-accent hover:bg-blue-600 rounded-lg text-white transition-all">
                            <ExternalLink size={24} />
                        </a>
                   </div>
                </div>
              </div>

              {/* Right Side: Review Area */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center border-l border-accent/10">
                {project.isReviewed ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2 text-accent">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-bold uppercase tracking-tight">Verified Review</span>
                        </div>
                        <StarRating rating={project.rating} />
                    </div>
                    
                    <blockquote className="text-lg italic text-foreground leading-relaxed font-medium">
                      &quot;{project.reviewText}&quot;
                    </blockquote>
                    
                    <div className="flex items-center gap-4 border-t border-accent/10 pt-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {project.clientName?.[0] || "C"}
                        </div>
                        <div>
                            <p className="text-foreground font-bold">{project.clientName || "Client"}</p>
                            <p className="text-muted-foreground text-sm">{project.clientDesignation || "Review from Client"}</p>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                        <MessageSquare size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Pending Client Review</h3>
                        <p className="text-muted-foreground">This project has been delivered. Waiting for client feedback.</p>
                    </div>
                    <Link
                      href={`/review/${project._id}`}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:scale-105 justify-center"
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
