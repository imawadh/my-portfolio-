"use client";

import Link from "next/link";
import SocialLinks from "./social-links";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-8 border-t border-border/40 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Let&apos;s build something <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Currently open for new opportunities and freelance projects. Whether you have a question or just want to say hi, I&apos;d love to hear from you!
          </p>
          <Link
            href="mailto:awadhkishorsingh241@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg btn-primary text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" aria-label="Navigate to Home" className="text-xl font-heading font-bold flex items-center gap-2">
            <span className="text-accent">A</span>
            <span className="text-foreground">wadh</span>
            <span className="w-2 h-2 rounded-full bg-accent"></span>
          </Link>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Awadh Kishor Singh. All rights reserved.
          </p>

          <SocialLinks iconSize={18} />
        </div>
      </div>
    </footer>
  );
}
