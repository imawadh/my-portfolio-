"use client";

import { useRef, useState } from "react";

export function SpotlightCard({ children, className = "", spotlightColor = "rgba(120, 119, 198, 0.3)" }) {
  const divRef = useRef(null);
  const spotlightRef = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || !spotlightRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`;
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-border bg-background/50 text-card-foreground shadow-sm ${className}`}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          // Initial background to avoid flash or empty style
          background: `radial-gradient(600px circle at 0px 0px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
