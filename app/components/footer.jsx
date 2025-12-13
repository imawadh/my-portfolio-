"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 glass border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 text-center md:text-left">
          © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
        </p>
        <p className="text-sm text-zinc-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
