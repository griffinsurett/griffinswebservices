// src/pages/api/chat.ts
import type { APIRoute } from "astro";
import OpenAI from "openai";
import { buildKnowledgeBase } from "@/integrations/chatbot/buildKnowledgeBase";

export const prerender = false;

const rateMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

const INJECTION_KEYWORDS = [
  "ignore all", "ignore previous", "system prompt", "forget your rules",
  "forget previous", "you are no longer", "instructions above", "reveal your instructions",
];

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please slow down." }),
        { status: 429, headers }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || !Array.isArray(body.messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid request body." }),
        { status: 400, headers }
      );
    }

    const messages: { role: "user" | "assistant"; content: string }[] =
      body.messages
        .filter(
          (m: unknown) =>
            m &&
            typeof m === "object" &&
            "role" in (m as object) &&
            "content" in (m as object) &&
            ["user", "assistant"].includes((m as { role: string }).role)
        )
        .slice(-10)
        .map((m: { role: "user" | "assistant"; content: string }) => ({
          role: m.role,
          content: String(m.content).slice(0, 1000),
        }));

    if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
      return new Response(
        JSON.stringify({ error: "No valid user message found." }),
        { status: 400, headers }
      );
    }

    for (const msg of messages) {
      if (msg.role === "user") {
        const lower = msg.content.toLowerCase();
        if (INJECTION_KEYWORDS.some(kw => lower.includes(kw))) {
          return new Response(
            JSON.stringify({ reply: "I'm a support assistant for Griffin's Web Services, so I stick to answering questions about our web design and development services. How can I help you today?" }),
            { status: 200, headers }
          );
        }
      }
    }

    const kb = await buildKnowledgeBase();

    const openai = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: kb },
        ...messages,
      ],
      max_tokens: 150,
      temperature: 0.3,
    });

    const rawReply = completion.choices[0]?.message?.content?.trim();

    const reply = rawReply
      ?.replace(/—/g, "-")
      ?.replace(/–/g, "-")
      ?.replace(/--/g, "-")
      ?.replace(/\*\*(.*?)\*\*/g, "$1")
      ?.replace(/\*(.*?)\*/g, "$1")
      ?.trim();

    if (!reply) {
      return new Response(
        JSON.stringify({ error: "No response from AI." }),
        { status: 500, headers }
      );
    }

    return new Response(JSON.stringify({ reply }), { status: 200, headers });
  } catch (err) {
    console.error("[ChatBot API Error]", err);
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers }
    );
  }
};

export const OPTIONS: APIRoute = () =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
