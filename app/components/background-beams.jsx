"use client";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)] ${className}`}
    >
      <div className="absolute inset-0 bg-background/50 blur-[100px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse will-change-auto" />
       
       {/* Animated Beams */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none will-change-transform"
      >
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent blur-sm transform -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm transform -translate-y-1/2" />
        <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] border border-primary/30 rounded-full blur-[2px]" />
      </motion.div>
    </div>
  );
};
