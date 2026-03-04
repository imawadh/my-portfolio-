"use client";

import { useEffect } from "react";
// Importing the singleton guarantees mixpanel.init() has already run
import mixpanel from "@/app/lib/mixpanel-client";

export default function HomeTracker() {
  useEffect(() => {
    // Only track if Mixpanel was successfully initialized with a token
    if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
      mixpanel.track("Home Page Visited", {
        page: "Home",
        url: window.location.href,
        referrer: document.referrer || "direct",
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  return null;
}
