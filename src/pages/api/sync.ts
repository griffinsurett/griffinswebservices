// src/pages/api/sync.ts
import type { APIRoute } from "astro";
import { syncSupabaseKnowledge } from "@/utils/knowledgeSync";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");
  const expectedSecret = import.meta.env.CRON_SECRET || process.env.CRON_SECRET;

  // Protect the sync endpoint in production if a CRON_SECRET is configured
  if (expectedSecret && secret !== expectedSecret) {
    return new Response(JSON.stringify({ error: "Unauthorized." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    console.log("[Sync API] Triggering automated background sync...");
    await syncSupabaseKnowledge();
    return new Response(
      JSON.stringify({ success: true, message: "Knowledge base sync completed successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    console.error("[Sync API] Exception during background sync:", err.message);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
