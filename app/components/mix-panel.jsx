"use client";

// Importing the singleton triggers mixpanel.init() at module-load time.
// This component is kept for any layout-level side effects (e.g. session recording).
import "@/app/lib/mixpanel-client";

export default function MixpanelInit() {
  return null;
}
