// src/utils/collections/prepare.ts
/**
 * Collection Entry Preparation - LAZY RENDER
 */

import type { CollectionKey, CollectionEntry } from "astro:content";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { MetaData, BaseData } from "@/content/schema";
import { getItemKey } from "./core";

// ❌ NO imports that touch pages/filesystem during module load
// ✅ Import inside functions

export interface PreparedFields {
  slug: string;
  url?: string;
  displayValue?: string;
  Content?: AstroComponentFactory;
  content?: string;
}

export type PreparedItem = BaseData & PreparedFields;

export async function prepareEntry<T extends CollectionKey>(
  entry: CollectionEntry<T>,
  collection: T,
  meta: MetaData
): Promise<PreparedItem> {
  // ✅ Lazy import utilities
  const { shouldItemHavePage, shouldItemUseRootPath } = await import(
    "@/utils/pages"
  );
  const { applyLinkBehavior, mergeLinkBehavior } = await import(
    "@/utils/links/linkBehavior"
  );

  const identifier = getItemKey(entry);
  const data = entry.data as Record<string, any>;

  // Check for link behavior config (item-level overrides collection-level)
  const linkBehavior = mergeLinkBehavior(
    data.linkBehavior,
    meta.itemsLinkBehavior
  );

  let itemUrl: string | undefined;
  let displayValue: string | undefined;

  if (linkBehavior) {
    // Use link behavior to determine URL and display value
    const linkResult = applyLinkBehavior(data, linkBehavior, collection, identifier);
    itemUrl = linkResult.url;
    displayValue = linkResult.displayValue;
  } else {
    // Standard URL generation
    const hasExistingUrl = data.url !== undefined;
    const hasPage = shouldItemHavePage(entry, meta);

    if (!hasExistingUrl && hasPage) {
      const useRootPath = shouldItemUseRootPath(entry, meta);
      itemUrl = useRootPath ? `/${identifier}` : `/${collection}/${identifier}`;
    }
  }

  let Content: AstroComponentFactory | undefined;
  const entryWithRender = entry as any;
  if (entryWithRender && typeof entryWithRender.render === "function") {
    try {
      const rendered = await entryWithRender.render();
      Content = rendered.Content;
    } catch (error) {
      console.warn(
        `Failed to render content for ${collection}/${identifier}:`,
        error
      );
    }
  }

  let content: string | undefined;
  if ("body" in entry) {
    content = (entry as any).body;
  }

  return {
    ...data,
    slug: identifier,
    ...(itemUrl && { url: itemUrl }),
    ...(displayValue && { displayValue }),
    ...(Content && { Content }),
    ...(content && { content }),
  } as PreparedItem;
}

export async function prepareCollectionEntries<T extends CollectionKey>(
  entries: CollectionEntry<T>[],
  collection: T,
  meta: MetaData
): Promise<PreparedItem[]> {
  return Promise.all(
    entries.map((entry) => prepareEntry(entry, collection, meta))
  );
}
