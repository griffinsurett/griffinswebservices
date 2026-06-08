import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

async function main() {
  const { data: chunks, error } = await supabase
    .from("knowledge_chunks")
    .select("id, content")
    .eq("document_name", "GWS_AI_Agent_Questionnaire.txt");

  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log(`TOTAL CHUNKS IN DB: ${chunks?.length}`);
  chunks?.forEach((chunk, idx) => {
    console.log(`[Chunk #${idx + 1}] Length: ${chunk.content.length}`);
    console.log(`Content: "${chunk.content}"`);
    console.log("-----------------------------------------");
  });
}

main();
