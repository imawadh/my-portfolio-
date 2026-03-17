"use client";

import Link from "next/link";
import SocialLinks from "./social-links";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-24 pb-10 border-t border-border bg-background relative overflow-hidden">
      {/* Decorative gradient blob in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
          Let's build something <span className="text-gradient">extraordinary.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Currently open for new opportunities and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Link
          href="mailto:im.awadh@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-primary text-lg font-medium shadow-xl"
        >
          Say Hello <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border/50 relative z-10">
        <Link href="/" className="text-xl tracking-tight font-heading font-bold flex items-center group">
          Awadh
          <span className="w-2 h-2 rounded-full bg-primary ml-1 mt-1 group-hover:scale-150 transition-transform"></span>
        </Link>

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
        </p>

        <SocialLinks iconSize={18} />
      </div>
    </footer>
  );
}
