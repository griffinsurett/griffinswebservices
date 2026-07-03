import { defineMiddleware } from "astro:middleware";

// TEMPORARILY DISABLED — payload limits for the API-connected /api/chat and /api/estimate routes.
// Both endpoints are short-circuited to 503 for now, so there is nothing to guard.
const LIMITS: Record<string, number> = {
  // "/api/chat": 32 * 1024,
  // "/api/estimate": 64 * 1024,
};

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (context.request.method === "POST" && pathname in LIMITS) {
    const raw = context.request.headers.get("content-length");
    const size = raw ? Number(raw) : NaN;
    if (Number.isFinite(size) && size > LIMITS[pathname]) {
      return new Response(
        JSON.stringify({ error: "Payload too large." }),
        {
          status: 413,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }

  return next();
});
