/**
 * Cloudflare Pages Function — /api/event
 *
 * Logs download and GitHub click events to Cloudflare Analytics Engine.
 * If Analytics Engine is not bound, falls back to console.log (visible in CF dashboard logs).
 *
 * Setup: In Cloudflare dashboard → Pages → Settings → Bindings,
 * add an Analytics Engine binding named "ANALYTICS".
 * Dataset name can be anything, e.g. "relay_events".
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const event = url.searchParams.get("e");
  const page = url.searchParams.get("p") || "/";

  if (!event) {
    return new Response("", { status: 204 });
  }

  // Log to Analytics Engine if bound
  if (context.env.ANALYTICS) {
    context.env.ANALYTICS.writeDataPoint({
      blobs: [event, page],
      indexes: [event],
    });
  } else {
    // Fallback: visible in CF Pages real-time logs
    console.log(`[event] ${event} on ${page}`);
  }

  return new Response("", {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
