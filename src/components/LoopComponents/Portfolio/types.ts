// src/components/LoopComponents/Portfolio/types.ts
// Shared types for portfolio components

import { getImageSrc } from "@/layouts/collections/helpers/layoutHelpers";

/**
 * Image source configuration for responsive images
 */
export interface PortfolioMediaEntry {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  sources?: { type?: string; srcSet: string; sizes?: string }[];
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async";
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * Position-specific image sources (for 3D carousel)
 */
export interface PortfolioImageSources {
  center?: string;
  side?: string;
  mobile?: string;
}

/**
 * Portfolio item data structure
 */
export interface PortfolioItemData {
  id?: string | number;
  slug?: string;
  title?: string;
  alt?: string;
  description?: string;
  client?: string;
  category?: string;
  featuredImage?: any;
  bannerImage?: any;
  image?: string;
  imageSources?: PortfolioImageSources;
  dimensions?: {
    aspectRatio?: number;
  };
  technologies?: string[];
  projectUrl?: string;
  url?: string;
}

/**
 * Get the primary image source from a portfolio item
 * Checks featuredImage, bannerImage, then image in order
 */
export function getPortfolioImageSrc(item: PortfolioItemData): string {
  return (
    getImageSrc(item.featuredImage) ||
    getImageSrc(item.bannerImage) ||
    getImageSrc(item.image) ||
    ""
  );
}

/**
 * Normalize items prop to always be an array
 */
export function normalizeItems<T>(items: T | T[] | undefined): T[] {
  if (!items) return [];
  return Array.isArray(items) ? items : [];
}
