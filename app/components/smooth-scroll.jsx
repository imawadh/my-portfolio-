"use client";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 2 }}>
      {children}
    </ReactLenis>
  );
}
