"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const StarRating = ({ rating, setRating, interactive = false }) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && setRating(star)}
          className={`${star <= rating ? "text-[#ffbf46] fill-[#ffbf46] scale-110" : "text-zinc-600"} transition-all duration-300 hover:scale-125`}
        >
          <Star size={interactive ? 32 : 24} />
        </button>
      ))}
    </div>
  );
};

export default function ReviewPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ 
    email: "", 
    rating: 5, 
    reviewText: "", 
    clientName: "", 
    clientDesignation: "" 
  });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/freelance-projects/${id}`);
      if (!res.ok) throw new Error("Project not found");
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
      setStatus({ ...status, error: "Project not found or already reviewed." });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const res = await fetch("/api/freelance-projects", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: id,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, error: null, success: true });
        setTimeout(() => router.push("/#freelance-reviews"), 3000);
      } else {
        setStatus({ loading: false, error: data.message, success: false });
      }
    } catch (error) {
      setStatus({ loading: false, error: "Something went wrong", success: false });
      console.log(error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#ffbf46] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status.error && !project) {
    return (
      <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-white mb-4">{status.error}</h1>
        <Link href="/" className="text-[#ffbf46] flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  if (status.success) {
    return (
      <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center p-4 text-center">
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8"
        >
            <CheckCircle2 size={48} />
        </motion.div>
        <h1 className="text-4xl font-bold text-white mb-4">Review Submitted!</h1>
        <p className="text-zinc-400 mb-8 max-w-md">
            Thank you for your feedback. We appreciate your time and effort in helping us improve.
            Redirecting you back to the portfolio...
        </p>
        <div className="w-full max-w-xs h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ duration: 3 }}
               className="h-full bg-linear-to-r from-[#ffbf46] to-[#66ced6]"
            />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white py-20 px-4">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ffbf46]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#66ced6]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#ffbf46] transition-colors mb-12 group"
        >
          <div className="p-2 bg-zinc-900 rounded-full group-hover:bg-[#ffbf46]/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2d3142]/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} className="text-[#ffbf46]" />
          </div>

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#ffbf46]/10 text-[#ffbf46] text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-[#ffbf46]/20">
              Verified Client Review
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-zinc-400">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              We're honored to have worked with you. Please share your experience with the world.
            </p>
          </div>

          <form onSubmit={handleSubmitReview} className="space-y-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300 ml-1">Client Email (Authorized)</label>
                <div className="relative group">
                    <input
                        required
                        type="email"
                        className="w-full px-6 py-4 rounded-2xl bg-[#080808]/50 border border-zinc-800 text-white focus:border-[#ffbf46] focus:ring-4 focus:ring-[#ffbf46]/10 transition-all outline-none"
                        placeholder="client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300 ml-1">Overall Rating</label>
                <div className="h-[62px] flex items-center px-6 rounded-2xl bg-[#080808]/50 border border-zinc-800">
                    <StarRating 
                        rating={formData.rating} 
                        setRating={(r) => setFormData({ ...formData, rating: r })} 
                        interactive 
                    />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300 ml-1">Your Full Name</label>
                <input
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-[#080808]/50 border border-zinc-800 text-white focus:border-[#ffbf46] focus:ring-4 focus:ring-[#ffbf46]/10 transition-all outline-none"
                    placeholder="Johnathan Doe"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-300 ml-1">Designation / Role</label>
                <input
                    required
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-[#080808]/50 border border-zinc-800 text-white focus:border-[#ffbf46] focus:ring-4 focus:ring-[#ffbf46]/10 transition-all outline-none"
                    placeholder="CEO at TechCorp"
                    value={formData.clientDesignation}
                    onChange={(e) => setFormData({ ...formData, clientDesignation: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-300 ml-1">Your Detailed Feedback</label>
              <textarea
                required
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-[#080808]/50 border border-zinc-800 text-white focus:border-[#ffbf46] focus:ring-4 focus:ring-[#ffbf46]/10 transition-all outline-none resize-none"
                placeholder="Describe your working experience with us..."
                value={formData.reviewText}
                onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
              />
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={status.loading}
                    className="group w-full md:w-auto px-12 py-5 bg-linear-to-r from-[#ffbf46] to-[#66ced6] text-[#080808] font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(255,191,70,0.5)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status.loading ? (
                        <div className="w-6 h-6 border-3 border-[#080808] border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <>
                            Submit My Review
                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>

            {status.error && (
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-3"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {status.error}
                </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
