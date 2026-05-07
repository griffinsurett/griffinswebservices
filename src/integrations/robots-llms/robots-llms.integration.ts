// src/integrations/robots-llms/robots-llms.integration.ts
import { writeFileSync, readdirSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteData } from '../../content/siteData';
import type { AstroIntegration } from 'astro';

interface PageManifestEntry {
  path: string;
  title: string;
  description: string;
  robots: string;
  addToLLMs: boolean;
}

function readManifest(distDir: string): PageManifestEntry[] {
  const seoDir = join(distDir, '__seo');
  if (!existsSync(seoDir)) return [];
  return readdirSync(seoDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      try {
        return JSON.parse(readFileSync(join(seoDir, f), 'utf8')) as PageManifestEntry;
      } catch {
        return null;
      }
    })
    .filter(Boolean) as PageManifestEntry[];
}

// ---------------------------------------------------------------------------
// robots.txt
// ---------------------------------------------------------------------------

function buildRobots(entries: PageManifestEntry[], siteUrl: string): string {
  const disallowed = entries
    .filter((e) => e.robots.includes('noindex'))
    .map((e) => `Disallow: ${e.path}`);

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

function buildLlms(entries: PageManifestEntry[], siteUrl: string): string {
  const lines: string[] = [
    `# ${siteData.title}`,
    `> ${siteData.tagline}`,
    '',
    siteData.description,
    '',
    ...(siteData.location ? [`Location: ${siteData.location}`, ''] : []),
  ];

  const included = entries
    .filter((e) => e.addToLLMs && !e.robots.includes('noindex'))
    .sort((a, b) => a.path.localeCompare(b.path));

  // Group by top-level path segment (e.g. /blog/foo → "blog")
  const sections = new Map<string, PageManifestEntry[]>();
  for (const entry of included) {
    const parts = entry.path.split('/').filter(Boolean);
    const section = parts.length >= 2 ? parts[0] : '__root';
    if (!sections.has(section)) sections.set(section, []);
    sections.get(section)!.push(entry);
  }

  // Root-level pages (no sub-section) go first as a flat list
  const rootEntries = sections.get('__root') ?? [];
  for (const entry of rootEntries) {
    const label = entry.title.replace(/ \| .*$/, '').trim() || entry.path;
    const desc = entry.description ? `: ${entry.description}` : '';
    lines.push(`- [${label}](${siteUrl}${entry.path})${desc}`);
  }
  if (rootEntries.length) lines.push('');

  for (const [section, sectionEntries] of sections) {
    if (section === '__root') continue;

    const heading = section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ');
    lines.push(`## ${heading}`, '');

    for (const entry of sectionEntries) {
      const label = entry.title.replace(/ \| .*$/, '').trim() || entry.path;
      const desc = entry.description ? `: ${entry.description}` : '';
      lines.push(`- [${label}](${siteUrl}${entry.path})${desc}`);
    }
    lines.push('');
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
      'astro:build:done': async ({ dir, logger }) => {
        const siteUrl = siteData.url.replace(/\/$/, '');
        const distDir = fileURLToPath(dir);
        const entries = readManifest(distDir);

        if (!entries.length) {
          logger.warn('robots-llms: no manifest entries found in dist/__seo/ — robots.txt and llms.txt will be minimal.');
        }

        try {
          writeFileSync(join(distDir, 'robots.txt'), buildRobots(entries, siteUrl), 'utf8');
          logger.info('robots.txt generated.');
        } catch (err: any) {
          logger.error(`robots.txt generation failed: ${err.message}`);
        }

        try {
          writeFileSync(join(distDir, 'llms.txt'), buildLlms(entries, siteUrl), 'utf8');
          logger.info('llms.txt generated.');
        } catch (err: any) {
          logger.error(`llms.txt generation failed: ${err.message}`);
        }

        // Clean up manifest — not needed in final dist
        try {
          const seoDir = join(distDir, '__seo');
          if (existsSync(seoDir)) rmSync(seoDir, { recursive: true, force: true });
        } catch (_) {}
      },
    },
  };
}
