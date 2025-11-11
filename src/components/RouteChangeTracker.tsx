// src/components/RouteChangeTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();

  // On route change, send a page view.
  // Initialization is handled in `src/main.tsx` to avoid double-initialization.
  useEffect(() => {
    const path = location.pathname + location.search;

    // Prefer using global gtag if the script is present (gtag/gtm setup).
    type GtagFn = (...args: unknown[]) => void;
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    if (import.meta.env.VITE_GA_ID && typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
      return;
    }

    // Fallback to react-ga4 API
    if (import.meta.env.VITE_GA_ID) {
      try {
        ReactGA.send({
          hitType: "pageview",
          page: path,
        });
      } catch (e) {
        // Silently ignore to avoid breaking the app; console for diagnostics
        console.warn("ReactGA send failed:", e);
      }
    }
  }, [location]);

  return null;
};

export default RouteChangeTracker;