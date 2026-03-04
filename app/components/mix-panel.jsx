"use client";

import { useEffect } from "react";
import mixpanel from "@/app/lib/mixpanel-client";

export default function MixpanelTracker() {
  useEffect(() => {
    // Only proceed if mixpanel is initialized with a token
    if (!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) return;

    const handleGlobalClick = (e) => {
      // Find the closest button or anchor element
      const target = e.target.closest("button, a, [role='button']");
      
      if (target) {
        // Extract meaningful text for tracking
        const text = target.innerText?.trim() 
          || target.getAttribute("aria-label") 
          || target.title 
          || target.name 
          || "Icon Button/Link";
          
        const className = typeof target.className === 'string' ? target.className : '';

        // Track the click event
        mixpanel.track("User Clicked Something", {
          interaction_type: "click",
          element_type: target.tagName?.toLowerCase() || "unknown",
          element_text: text,
          element_id: target.id || undefined,
          element_classes: className,
          href: target.getAttribute("href") || undefined,
          page_url: window.location.pathname,
          timestamp: new Date().toISOString(),
        });
      }
    };

    // Use event delegation on document body (very efficient)
    document.addEventListener("click", handleGlobalClick, { capture: true });

    return () => {
        document.removeEventListener("click", handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
