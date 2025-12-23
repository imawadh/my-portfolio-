"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080808] text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffbf46] to-[#66ced6] mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-10">
          The page you are looking for might have been moved, deleted, or never existed in the first place.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#ffbf46] to-[#66ced6] text-[#080808] font-bold hover:shadow-[0_0_20px_rgba(255,191,70,0.4)] transition-all hover:scale-105"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
