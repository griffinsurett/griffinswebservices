import { useCallback } from 'react';
import { g as getCookie, a as setCookie, c as clearCookie, i as isTrackingAllowed } from './hvac_DDMnHj8t.mjs';

function useCookieStorage() {
  const getCookie$1 = useCallback((name) => {
    return getCookie(name);
  }, []);
  const setCookie$1 = useCallback((name, value, options = {}) => {
    setCookie(name, value, options);
  }, []);
  const deleteCookie = useCallback((name, path = "/") => {
    clearCookie(name, { path });
  }, []);
  return { getCookie: getCookie$1, setCookie: setCookie$1, deleteCookie };
}

function enableScript(blockedScript) {
  if (blockedScript.dataset.consentEnabled === "true") {
    return;
  }
  const newScript = document.createElement("script");
  Array.from(blockedScript.attributes).forEach((attr) => {
    if (attr.name !== "type") {
      newScript.setAttribute(attr.name, attr.value);
    }
  });
  newScript.type = "text/javascript";
  if (blockedScript.dataset.partytown === "true") {
    newScript.type = "text/partytown";
  }
  if (blockedScript.textContent) {
    newScript.textContent = blockedScript.textContent;
  }
  blockedScript.dataset.consentEnabled = "true";
  blockedScript.parentNode?.insertBefore(newScript, blockedScript.nextSibling);
  console.log(`✅ Enabled ${blockedScript.dataset.consent} script:`, blockedScript.src || "inline");
}
function findBlockedScripts(category) {
  const selector = `script[type="text/plain"][data-consent="${category}"]`;
  return Array.from(document.querySelectorAll(selector));
}
function enableScriptsForCategory(category) {
  if (typeof document === "undefined") return;
  const blockedScripts = findBlockedScripts(category);
  if (blockedScripts.length === 0) {
    console.log(`ℹ️  No blocked scripts found for category: ${category}`);
    return;
  }
  console.log(`🔓 Enabling ${blockedScripts.length} script(s) for category: ${category}`);
  blockedScripts.forEach((script) => {
    enableScript(script);
  });
}
function enableConsentedScripts() {
  if (typeof document === "undefined") return;
  const categories = ["necessary", "functional", "performance", "targeting"];
  categories.forEach((category) => {
    if (isTrackingAllowed(category)) {
      enableScriptsForCategory(category);
    }
  });
}

export { enableScriptsForCategory as a, enableConsentedScripts as e, useCookieStorage as u };
