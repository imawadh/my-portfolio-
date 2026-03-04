import mixpanel from "mixpanel-browser";

// Initialize at module load time (client-side only).
// This guarantees init() always runs before any track() call.
if (typeof window !== "undefined") {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  
  if (token) {
    mixpanel.init(token, {
      autocapture: true,
      debug: process.env.NODE_ENV !== "production", // Useful for testing tracking in dev
      record_sessions_percent: 100,
    });
  } else {
    console.warn("Mixpanel token is missing. Mixpanel will not be initialized.");
  }
}

export default mixpanel;
