// src/pages/robots.txt.ts
import { siteData } from "@/content/siteData";
import { getCollectionNames, getCollectionMeta } from "@/utils/collections";
import { query } from "@/utils/query";
import { buildUrl, mergeLinkBehavior } from "@/utils/links/linkBehavior";
import type { BaseData } from "@/content/schema";
import type { APIRoute } from "astro";
import type { CollectionKey } from "astro:content";

export const GET: APIRoute = async () => {
  const disallowed: string[] = [];

  for (const collectionName of getCollectionNames()) {
    const meta = getCollectionMeta(collectionName);
    const entries = await query(collectionName as CollectionKey).all();

    for (const entry of entries) {
      const data = entry.data as BaseData;
      if (!data.seo?.robots?.includes("noindex")) continue;

      const linkBehavior = mergeLinkBehavior(data.linkBehavior, meta.itemsLinkBehavior);
      const url = buildUrl(data as Record<string, any>, linkBehavior, collectionName, entry.id);
      if (url) disallowed.push(`Disallow: ${url}`);
    }
  }

  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /*?*",
    ...disallowed,
    `Host: ${siteData.url}`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain" },
  });
};
