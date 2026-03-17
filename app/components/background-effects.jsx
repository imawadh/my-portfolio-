"use client";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated radial blobs */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 dark:opacity-15 animate-blob"
        style={{
          background: "radial-gradient(circle, rgba(184,32,230,0.5) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-15 dark:opacity-12 animate-blob animation-delay-2000"
        style={{
          background: "radial-gradient(circle, rgba(218,125,32,0.4) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[550px] h-[550px] rounded-full opacity-10 dark:opacity-10 animate-blob animation-delay-4000"
        style={{
          background: "radial-gradient(circle, rgba(184,32,230,0.3) 0%, transparent 65%)",
        }}
      />
      {/* Extra subtle tertiary orb */}
      <div
        className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-08 animate-blob animation-delay-3000"
        style={{
          background: "radial-gradient(circle, rgba(100,60,255,0.3) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
