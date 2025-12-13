"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/awadhkishor", // Placeholder, update if known
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/awadhkishor", // Placeholder
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/awadhkishor", // Placeholder
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:contact@awadhkishor.com", // Placeholder
    icon: Mail,
  },
];

export default function SocialLinks({ className = "", iconSize = 24 }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
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
