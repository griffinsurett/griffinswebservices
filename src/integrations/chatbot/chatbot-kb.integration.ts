// src/integrations/chatbot/chatbot-kb.integration.ts
// Runs at build time, generates knowledge-base.generated.ts so the
// /api/chat serverless function never imports astro:content at runtime.

import type { AstroIntegration } from "astro";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { buildKnowledgeBase } from "./buildKnowledgeBase";
import { DEFAULT_CONTENT_DIR } from "../../utils/filesystem/contentScanner";

const OUT_FILE = join(
  dirname(fileURLToPath(import.meta.url)),
  "knowledge-base.generated.ts"
);

export default function chatbotKbIntegration(): AstroIntegration {
  return {
    name: "chatbot-kb-generator",
    hooks: {
      "astro:build:start": ({ logger }) => {
        try {
          const kb = buildKnowledgeBase(DEFAULT_CONTENT_DIR);
          const escaped = kb
            .replace(/\\/g, "\\\\")
            .replace(/`/g, "\\`")
            .replace(/\$\{/g, "\\${");
          writeFileSync(
            OUT_FILE,
            `// AUTO-GENERATED at build time — do not edit\nexport const KNOWLEDGE_BASE = \`${escaped}\`;\n`,
            "utf-8"
          );
          logger.info("chatbot-kb: knowledge base generated.");
        } catch (err: any) {
          logger.error(`chatbot-kb: failed to generate knowledge base — ${err.message}`);
        }
      },
    },
  };
}
