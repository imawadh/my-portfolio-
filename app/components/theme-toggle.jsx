"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center p-2 rounded-full text-foreground hover:bg-muted transition-colors focus:outline-none"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : (
          <Moon className="h-5 w-5 text-primary" />
        )}
      </motion.div>
    </button>
  );
}
