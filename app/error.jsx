"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080808] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Something went wrong!</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-10">
          We encountered an unexpected error. Please try refreshing the page or contact me if the issue persists.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#2d3142] border border-[#ffbf46]/20 text-white font-bold hover:border-[#ffbf46] transition-all hover:scale-105"
        >
          <RotateCcw size={20} /> Try again
        </button>
      </motion.div>
    </div>
  );
}
