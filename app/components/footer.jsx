"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
