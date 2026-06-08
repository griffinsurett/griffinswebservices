import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

async function debug() {
  // 1. Check how many chunks exist
  const { data: chunks, error: chunksErr } = await supabase
    .from("knowledge_chunks")
    .select("id, filename, chunk_index, content");

  if (chunksErr) {
    console.log("❌ Error fetching chunks:", chunksErr.message);
    return;
  }
  console.log(`📦 Total chunks in DB: ${chunks?.length || 0}`);
  if (chunks && chunks.length > 0) {
    console.log(`   First chunk preview: "${chunks[0].content?.slice(0, 100)}..."`);
  }

  // 2. Check if embeddings are NULL
  const { data: nullEmbeddings, error: nullErr } = await supabase
    .from("knowledge_chunks")
    .select("id")
    .is("embedding", null);

  console.log(`🔍 Chunks with NULL embeddings: ${nullEmbeddings?.length || 0}`);

  // 3. Try direct vector search
  const query = "what is your pricing";
  console.log(`\n🔎 Testing search for: "${query}"`);

  const embResponse = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });
  const queryEmbedding = embResponse.data[0].embedding;
  console.log(`   Embedding dimension: ${queryEmbedding.length}`);

  // Try with very low threshold
  const { data: matches, error: matchErr } = await supabase.rpc(
    "match_knowledge_chunks",
    {
      query_embedding: queryEmbedding,
      match_threshold: 0.0,  // Accept ANY similarity
      match_count: 5,
    }
  );

  if (matchErr) {
    console.log("❌ RPC Error:", matchErr.message);
  } else {
    console.log(`✅ Matches found (threshold 0.0): ${matches?.length || 0}`);
    if (matches) {
      matches.forEach((m: any, i: number) => {
        console.log(`   ${i + 1}. [${m.similarity?.toFixed(4)}] ${m.content?.slice(0, 80)}...`);
      });
    }
  }

  // 4. Also try with the normal 0.2 threshold
  const { data: matches2, error: matchErr2 } = await supabase.rpc(
    "match_knowledge_chunks",
    {
      query_embedding: queryEmbedding,
      match_threshold: 0.2,
      match_count: 5,
    }
  );

  console.log(`\n✅ Matches found (threshold 0.2): ${matches2?.length || 0}`);
  if (matches2) {
    matches2.forEach((m: any, i: number) => {
      console.log(`   ${i + 1}. [${m.similarity?.toFixed(4)}] ${m.content?.slice(0, 80)}...`);
    });
  }
}

debug().catch(console.error);
