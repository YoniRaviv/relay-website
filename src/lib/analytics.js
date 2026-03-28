/**
 * Minimal click tracking using Cloudflare Web Analytics custom events.
 * CF Web Analytics is enabled in the dashboard — it injects its own script.
 * We just push events to the __cfBeacon queue when available.
 *
 * If CF Web Analytics is not yet enabled, events are silently dropped.
 */
export function trackEvent(name) {
  try {
    // CF Web Analytics exposes __cfRum if the script is loaded
    if (typeof window.__cfRum === "function") {
      window.__cfRum("event", { name });
    }
  } catch {
    // silent
  }
}

export function trackDownload() {
  trackEvent("download");
}

export function trackGitHub() {
  trackEvent("github");
}
