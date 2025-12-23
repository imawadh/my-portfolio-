"use client";

import dynamic from 'next/dynamic';

const FloatingOrbs = dynamic(() => import("./floating-orbs").then(mod => mod.FloatingOrbs), { ssr: false });
const BackgroundBeams = dynamic(() => import("./background-beams").then(mod => mod.BackgroundBeams), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <BackgroundBeams />
      <FloatingOrbs />
    </>
  );
}
