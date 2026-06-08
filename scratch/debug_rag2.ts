import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

async function fix() {
  // 1. Check a raw embedding to make sure it's valid
  const { data: sample, error: sampleErr } = await supabase
    .from("knowledge_chunks")
    .select("id, embedding")
    .limit(1)
    .single();

  if (sampleErr) {
    console.log("❌ Error:", sampleErr.message);
    return;
  }

  const emb = sample?.embedding;
  console.log("Embedding type:", typeof emb);
  console.log("Embedding is array:", Array.isArray(emb));
  if (Array.isArray(emb)) {
    console.log("Embedding length:", emb.length);
    console.log("First 3 values:", emb.slice(0, 3));
  } else if (typeof emb === "string") {
    console.log("Embedding string length:", emb.length);
    console.log("Starts with:", emb.slice(0, 50));
  } else {
    console.log("Embedding value:", JSON.stringify(emb)?.slice(0, 200));
  }

  // 2. Try a raw cosine similarity query via RPC with threshold -1 (accept everything)
  const query = "pricing packages";
  const embResponse = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const queryEmbedding = embResponse.data[0].embedding;

  // Convert to pgvector string format
  const vectorStr = `[${queryEmbedding.join(",")}]`;

  // Try calling with the string format
  const { data: matches, error: matchErr } = await supabase.rpc(
    "match_knowledge_chunks",
    {
      query_embedding: vectorStr,
      match_threshold: -1.0,
      match_count: 10,
    }
  );

  if (matchErr) {
    console.log("\n❌ RPC Error with string format:", matchErr.message);
  } else {
    console.log(`\n✅ Matches with string format (threshold -1): ${matches?.length || 0}`);
    if (matches) {
      matches.forEach((m: any, i: number) => {
        console.log(`   ${i + 1}. [sim: ${m.similarity?.toFixed(4)}] ${m.content?.slice(0, 80)}...`);
      });
    }
  }

  // 3. Try calling with array format
  const { data: matches2, error: matchErr2 } = await supabase.rpc(
    "match_knowledge_chunks",
    {
      query_embedding: queryEmbedding,
      match_threshold: -1.0,
      match_count: 10,
    }
  );

  if (matchErr2) {
    console.log("\n❌ RPC Error with array format:", matchErr2.message);
  } else {
    console.log(`\n✅ Matches with array format (threshold -1): ${matches2?.length || 0}`);
    if (matches2) {
      matches2.forEach((m: any, i: number) => {
        console.log(`   ${i + 1}. [sim: ${m.similarity?.toFixed(4)}] ${m.content?.slice(0, 80)}...`);
      });
    }
  }
}

fix().catch(console.error);
