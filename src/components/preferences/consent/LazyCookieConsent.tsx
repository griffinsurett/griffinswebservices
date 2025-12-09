/**
 * LazyCookieConsent - Deferred loading wrapper for CookieConsentBanner
 *
 * This component delays loading the cookie consent banner JS until after
 * LCP has been measured. The banner doesn't show for 1 second anyway,
 * so there's no visual impact from deferring the load.
 */

import { lazy, Suspense, useEffect, useState } from "react";

const CookieConsentBanner = lazy(() => import("./CookieConsentBanner"));

export default function LazyCookieConsent() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Check if consent already exists - if so, don't load at all
    if (document.cookie.includes("cookie-consent=")) {
      return;
    }

    // Wait for browser idle + delay to ensure LCP is measured
    const minDelay = 2000;

    let timeoutId: ReturnType<typeof setTimeout>;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => {
          timeoutId = setTimeout(() => setShouldLoad(true), minDelay);
        },
        { timeout: 4000 }
      );

      return () => {
        window.cancelIdleCallback(idleId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    } else {
      timeoutId = setTimeout(() => setShouldLoad(true), minDelay);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <CookieConsentBanner />
    </Suspense>
  );
}
