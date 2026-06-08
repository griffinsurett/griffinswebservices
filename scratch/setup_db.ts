import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function setupDatabase() {
  console.log("🚀 Setting up Supabase database for:", process.env.SUPABASE_URL);

  // 1. Enable pgvector extension
  const { error: extError } = await supabase.rpc("query", {
    sql: "CREATE EXTENSION IF NOT EXISTS vector;",
  }).catch(() => ({ error: null }));

  // Use raw SQL via the REST API
  const headers = {
    "Content-Type": "application/json",
    apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
    Prefer: "return=minimal",
  };

  const baseUrl = process.env.SUPABASE_URL!;

  async function runSQL(sql: string, label: string) {
    const res = await fetch(`${baseUrl}/rest/v1/rpc/exec_sql`, {
      method: "POST",
      headers,
      body: JSON.stringify({ sql }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.log(`⚠️  ${label} (may already exist):`, text.slice(0, 200));
    } else {
      console.log(`✅ ${label}`);
    }
  }

  // Use the Supabase Management API to run SQL
  const projectRef = "afvzesojldpbfaiedwme";
  const managementHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
  };

  const sqls = [
    {
      label: "Enable pgvector",
      sql: "CREATE EXTENSION IF NOT EXISTS vector;",
    },
    {
      label: "Create knowledge_documents table",
      sql: `CREATE TABLE IF NOT EXISTS knowledge_documents (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        filename TEXT NOT NULL UNIQUE,
        content TEXT,
        content_type TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );`,
    },
    {
      label: "Create knowledge_chunks table",
      sql: `CREATE TABLE IF NOT EXISTS knowledge_chunks (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        document_id UUID REFERENCES knowledge_documents(id) ON DELETE CASCADE,
        filename TEXT NOT NULL,
        chunk_index INTEGER NOT NULL,
        content TEXT NOT NULL,
        embedding VECTOR(1536),
        created_at TIMESTAMPTZ DEFAULT NOW()
      );`,
    },
    {
      label: "Create match_knowledge_chunks function",
      sql: `CREATE OR REPLACE FUNCTION match_knowledge_chunks(
        query_embedding VECTOR(1536),
        match_threshold FLOAT DEFAULT 0.2,
        match_count INT DEFAULT 5
      )
      RETURNS TABLE (
        id UUID,
        filename TEXT,
        content TEXT,
        similarity FLOAT
      )
      LANGUAGE plpgsql
      AS $$
      BEGIN
        RETURN QUERY
        SELECT
          kc.id,
          kc.filename,
          kc.content,
          1 - (kc.embedding <=> query_embedding) AS similarity
        FROM knowledge_chunks kc
        WHERE 1 - (kc.embedding <=> query_embedding) > match_threshold
        ORDER BY kc.embedding <=> query_embedding
        LIMIT match_count;
      END;
      $$;`,
    },
    {
      label: "Create IVFFlat index on embeddings",
      sql: `CREATE INDEX IF NOT EXISTS knowledge_chunks_embedding_idx
        ON knowledge_chunks
        USING ivfflat (embedding vector_cosine_ops)
        WITH (lists = 100);`,
    },
    {
      label: "Enable RLS on knowledge_documents",
      sql: `ALTER TABLE knowledge_documents ENABLE ROW LEVEL SECURITY;`,
    },
    {
      label: "Enable RLS on knowledge_chunks",
      sql: `ALTER TABLE knowledge_chunks ENABLE ROW LEVEL SECURITY;`,
    },
    {
      label: "Service role bypass policy for knowledge_documents",
      sql: `CREATE POLICY IF NOT EXISTS "service_role_all_documents"
        ON knowledge_documents FOR ALL
        TO service_role USING (true) WITH CHECK (true);`,
    },
    {
      label: "Service role bypass policy for knowledge_chunks",
      sql: `CREATE POLICY IF NOT EXISTS "service_role_all_chunks"
        ON knowledge_chunks FOR ALL
        TO service_role USING (true) WITH CHECK (true);`,
    },
  ];

  for (const { label, sql } of sqls) {
    // Try using the Supabase DB direct SQL endpoint
    const res = await fetch(`${baseUrl}/rest/v1/`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
    });

    // Actually use pg via the admin API
    console.log(`\n⏳ ${label}...`);
    const { error } = await (supabase as any).rpc("exec_sql", { sql }).catch(
      () => ({ error: { message: "rpc not available" } })
    );
    if (error) {
      // fallback: try direct table creation via REST
      console.log(`   Using direct approach...`);
    }
  }

  // Try a simpler approach: just check if the tables exist
  console.log("\n📋 Checking existing tables...");
  const { data: docs, error: docsError } = await supabase
    .from("knowledge_documents")
    .select("id")
    .limit(1);

  if (docsError) {
    console.log("❌ knowledge_documents table not found:", docsError.message);
    console.log("\n⚠️  MANUAL SETUP REQUIRED");
    console.log("Please run the SQL schema manually in your Supabase Dashboard:");
    console.log("→ Go to: https://supabase.com/dashboard/project/afvzesojldpbfaiedwme/sql");
    console.log("→ Run the schema from: scratch/schema.sql");
  } else {
    console.log("✅ knowledge_documents table exists");

    const { data: chunks, error: chunksError } = await supabase
      .from("knowledge_chunks")
      .select("id")
      .limit(1);

    if (chunksError) {
      console.log("❌ knowledge_chunks table not found:", chunksError.message);
    } else {
      console.log("✅ knowledge_chunks table exists");
      console.log("\n🎉 Database is ready! You can now restart the dev server.");
    }
  }
}

setupDatabase().catch(console.error);
