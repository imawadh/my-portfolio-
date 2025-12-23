"use client";

import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/imawadh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/imawadh/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/im_awadh_",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/im_awadh_/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:awadhkishorsingh241@gmail.com",
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
