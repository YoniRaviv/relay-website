/**
 * Minimal outbound link tracking.
 * Sends a pixel request to a Cloudflare Pages Function at /api/event.
 * If the function doesn't exist yet, the request silently 404s — no impact.
 */
const ENDPOINT = "/api/event";

export function trackEvent(name) {
  try {
    const params = new URLSearchParams({
      e: name,
      p: window.location.pathname,
      t: Date.now().toString(),
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(`${ENDPOINT}?${params}`);
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
