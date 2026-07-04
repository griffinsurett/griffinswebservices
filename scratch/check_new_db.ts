import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function check() {
  console.log("🔍 Checking new Supabase project:", process.env.SUPABASE_URL);

  // Check knowledge_documents
  const { data: docs, error: docsErr } = await supabase
    .from("knowledge_documents")
    .select("id")
    .limit(1);

  if (docsErr) {
    console.log("❌ knowledge_documents: NOT FOUND →", docsErr.message);
  } else {
    console.log("✅ knowledge_documents: EXISTS");
  }

  // Check knowledge_chunks
  const { data: chunks, error: chunksErr } = await supabase
    .from("knowledge_chunks")
    .select("id")
    .limit(1);

  if (chunksErr) {
    console.log("❌ knowledge_chunks: NOT FOUND →", chunksErr.message);
  } else {
    console.log("✅ knowledge_chunks: EXISTS");
  }

  // Check storage bucket
  const { data: buckets, error: bucketsErr } = await supabase.storage.listBuckets();
  if (bucketsErr) {
    console.log("❌ Storage list error:", bucketsErr.message);
  } else {
    const kb = buckets?.find((b) => b.name === "knowledge-base");
    if (kb) {
      console.log("✅ knowledge-base storage bucket: EXISTS");
    } else {
      console.log("❌ knowledge-base storage bucket: NOT FOUND");
      console.log("   Available buckets:", buckets?.map((b) => b.name).join(", ") || "none");
    }
  }

  if (docsErr || chunksErr) {
    console.log("\n⚠️  SETUP NEEDED — Run the SQL schema manually:");
    console.log("👉 https://supabase.com/dashboard/project/bxsjlnmuyizoxwmfqxsb/sql/new");
    console.log("   Copy & paste the contents of: scratch/schema.sql");
  } else {
    console.log("\n🎉 Database is fully ready!");
  }
}

check().catch(console.error);
