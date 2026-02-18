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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Freelance Projects & Reviews
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering high-quality solutions for clients worldwide. Here&apos;s what they have to say.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || project.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-white/40 rounded-3xl border border-primary/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left Side: Preview Area */}
              <div className="md:w-1/2 p-1 bg-secondary/30 flex flex-col">
                <div className="grow flex items-center justify-center min-h-[250px] relative group overflow-hidden bg-background/50 m-4 rounded-2xl border border-border">
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
                   
                   <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full text-foreground hover:text-primary transition-colors border border-border">
                            <Github size={24} />
                        </a>
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary rounded-full text-primary-foreground hover:scale-110 transition-transform">
                            <ExternalLink size={24} />
                        </a>
                   </div>
                </div>
                
                <div className="px-8 pb-6 flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Github size={16} />
                        <span className="text-xs font-medium">Source Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest">Live Site</span>
                    </div>
                </div>
              </div>

              {/* Right Side: Review Area */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-l border-border">
                {project.isReviewed ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2 text-primary">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-bold uppercase tracking-tighter">Verified Review</span>
                        </div>
                        <StarRating rating={project.rating} />
                    </div>
                    
                    <blockquote className="text-xl italic text-foreground leading-relaxed font-medium">
                      &quot;{project.reviewText}&quot;
                    </blockquote>
                    
                    <div className="flex items-center gap-4 border-t border-border pt-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                            {project.clientName?.[0] || "C"}
                        </div>
                        <div>
                            <p className="text-foreground font-bold">{project.clientName || "Client"}</p>
                            <p className="text-muted-foreground text-sm">{project.clientDesignation || "Review from Founding Member"}</p>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <MessageSquare size={36} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Pending Client Review</h3>
                        <p className="text-muted-foreground">This project has been delivered. Waiting for client feedback.</p>
                    </div>
                    <Link
                      href={`/review/${project._id}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
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
