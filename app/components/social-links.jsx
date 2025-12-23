"use client";

import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/app/data/social";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail
};

export default function SocialLinks({ className = "", iconSize = 24 }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.iconName] || iconMap[link.name] || Mail;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-primary transition-colors duration-300 dark:text-zinc-400 dark:hover:text-primary"
            aria-label={link.name}
          >
            <Icon size={iconSize} />
          </Link>
        );
      })}
    </div>
  );
}
