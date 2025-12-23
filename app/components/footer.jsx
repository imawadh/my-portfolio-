"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#080808] border-t border-[#ffbf46]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400 text-center md:text-left">
          © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
        </p>
        <p className="text-sm text-zinc-400 flex items-center gap-1">
            Made with <Heart size={14} className="text-[#ffbf46] fill-[#ffbf46]" /> using <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
