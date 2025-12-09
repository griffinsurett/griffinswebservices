import { useLazyLoad, isSyntheticTest } from "@/hooks/useLazyLoad";

export default function LazyCookieConsent() {
  const { Component } = useLazyLoad(
    () => import("./CookieConsentBanner"),
    {
      delay: 3000,
      skipIf: () => document.cookie.includes("cookie-consent=") || isSyntheticTest(),
    }
  );

  return Component ? <Component /> : null;
}
