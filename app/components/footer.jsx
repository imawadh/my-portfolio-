"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#080808] border-t border-[#ffbf46]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm text-zinc-400 text-center md:text-left">
          © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
