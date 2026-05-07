// src/integrations/robots-llms/robots-llms.integration.ts
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanCollections } from '../../utils/filesystem/contentScanner';
import { shouldItemHavePage, shouldItemUseRootPath } from '../../utils/filesystem/pageLogic';
import { SITE_URL, siteData } from '../../content/siteData';
import type { AstroIntegration } from 'astro';

// ---------------------------------------------------------------------------
// robots.txt
// ---------------------------------------------------------------------------

function buildRobots(pages: { pathname: string }[], siteUrl: string): string {
  const pageSet = new Set(pages.map((p) => `/${p.pathname}`.replace(/\/$/, '') || '/'));

  const disallowed: string[] = [];

  for (const { name, meta, items } of scanCollections()) {
    for (const { slug, data } of items) {
      if (!shouldItemHavePage(data, meta)) continue;
      if (!String(data.seo?.robots ?? '').includes('noindex')) continue;

      const path = shouldItemUseRootPath(data, meta)
        ? `/${slug}`
        : `/${name}/${slug}`;

      if (pageSet.has(path)) disallowed.push(`Disallow: ${path}`);
    }
  }

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /*?*',
    ...disallowed,
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
    `Host: ${siteUrl}`,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// llms.txt
// ---------------------------------------------------------------------------

function buildLlms(pages: { pathname: string }[], siteUrl: string): string {
  const pageSet = new Set(pages.map((p) => `/${p.pathname}`.replace(/\/$/, '') || '/'));

  const lines: string[] = [
    `# ${siteData.title}`,
    `> ${siteData.tagline}`,
    '',
    siteData.description,
    '',
    ...(siteData.location ? [`Location: ${siteData.location}`, ''] : []),
  ];

  for (const { name, meta, items } of scanCollections()) {
    if (meta.llms?.addToLLMs === false) continue;
    if (meta.llms?.itemsAddToLLMs === false) continue;
    if (!items.length) continue;

    const sectionTitle: string = meta.llms?.title ?? meta.title ?? name;
    const sectionDesc: string | undefined = meta.llms?.description ?? meta.description;

    const itemLines: string[] = [];

    for (const { slug, data } of items) {
      if (!shouldItemHavePage(data, meta)) continue;
      if (data.llms?.addToLLMs === false) continue;

      const titleField: string = data.llms?.titleField ?? meta.llms?.itemsTitleField ?? 'title';
      const descField: string = data.llms?.descriptionField ?? meta.llms?.itemsDescriptionField ?? 'description';

      const itemTitle: string | undefined = data.llms?.title ?? data.seo?.metaTitle ?? data[titleField];
      const itemDesc: string | undefined = data.llms?.description ?? data.seo?.metaDescription ?? data[descField];

      if (!itemTitle) continue;

      const path = shouldItemUseRootPath(data, meta) ? `/${slug}` : `/${name}/${slug}`;
      const url = pageSet.has(path) ? `${siteUrl}${path}` : undefined;

      itemLines.push(url
        ? `- [${itemTitle}](${url})${itemDesc ? `: ${itemDesc}` : ''}`
        : `- ${itemTitle}${itemDesc ? `: ${itemDesc}` : ''}`
      );
    }

    const indexPath = `/${name}`;
    const hasIndexPage = pageSet.has(indexPath);

    if (!itemLines.length && !hasIndexPage) continue;

    lines.push(`## ${sectionTitle}`, '');
    if (sectionDesc) lines.push(sectionDesc, '');
    if (hasIndexPage) lines.push(`- [${sectionTitle}](${siteUrl}${indexPath})`, '');
    lines.push(...itemLines, '');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Integration
// ---------------------------------------------------------------------------

export default function robotsLlmsIntegration(): AstroIntegration {
  return {
    name: 'robots-llms',
    hooks: {
      'astro:build:done': async ({ pages, dir, logger }) => {
        const siteUrl = siteData.url.replace(/\/$/, '');
        const distDir = fileURLToPath(dir);

        try {
          writeFileSync(join(distDir, 'robots.txt'), buildRobots(pages, siteUrl), 'utf8');
          logger.info('robots.txt generated.');
        } catch (err: any) {
          logger.error(`robots.txt generation failed: ${err.message}`);
        }

        try {
          writeFileSync(join(distDir, 'llms.txt'), buildLlms(pages, siteUrl), 'utf8');
          logger.info('llms.txt generated.');
        } catch (err: any) {
          logger.error(`llms.txt generation failed: ${err.message}`);
        }
      },
    },
  };
}
