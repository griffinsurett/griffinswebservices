// src/pages/llms.txt.ts
import { siteData } from "@/content/siteData";
import { getCollectionNames, getCollectionMeta } from "@/utils/collections";
import { query } from "@/utils/query";
import type { BaseData } from "@/content/schema";
import type { APIRoute } from "astro";
import type { CollectionKey } from "astro:content";

function resolveUrl(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  return raw.startsWith("http") ? raw : `${siteData.url}${raw}`;
}

export const GET: APIRoute = async () => {
  const lines: string[] = [
    `# ${siteData.title}`,
    `> ${siteData.tagline}`,
    "",
    siteData.description,
    "",
    `Location: ${siteData.location}`,
    "",
  ];

  const collectionNames = getCollectionNames();

  for (const collectionName of collectionNames) {
    const meta = getCollectionMeta(collectionName);

    if (meta.llms?.addToLLMs === false) continue;

    const entries = await query(collectionName as CollectionKey).all();
    if (!entries.length) continue;

    const includeItems = meta.llms?.itemsAddToLLMs !== false;
    if (!includeItems) continue;

    const sectionTitle = meta.llms?.title ?? meta.title ?? collectionName;
    const sectionDesc = meta.llms?.description ?? meta.description;
    lines.push(`## ${sectionTitle}`, "");
    if (sectionDesc) lines.push(sectionDesc, "");

    for (const entry of entries) {
      const data = entry.data as BaseData;

      if (data.llms?.addToLLMs === false) continue;

      const titleField = data.llms?.titleField ?? meta.llms?.itemsTitleField ?? "title";
      const descField = data.llms?.descriptionField ?? meta.llms?.itemsDescriptionField ?? "description";
      const urlField = data.llms?.urlField ?? meta.llms?.itemsUrlField;

      const title = data.llms?.title ?? data.seo?.metaTitle ?? (data as Record<string, any>)[titleField];
      const desc = data.llms?.description ?? data.seo?.metaDescription ?? (data as Record<string, any>)[descField];
      const url = resolveUrl(urlField ? (data as Record<string, any>)[urlField] : undefined);

      if (!title) continue;

      if (url) {
        lines.push(`- [${title}](${url})${desc ? `: ${desc}` : ""}`);
      } else {
        lines.push(`- ${title}${desc ? `: ${desc}` : ""}`);
      }
    }

    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
