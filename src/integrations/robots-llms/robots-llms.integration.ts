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

// Collections whose content is purely structural/navigational — never useful for LLMs
const EXCLUDED_COLLECTIONS = new Set(['menu-items', 'menus', 'social-media', 'authors', 'stats']);

// ---------------------------------------------------------------------------
// Manifest reader
// ---------------------------------------------------------------------------

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

  const sections = new Map<string, PageManifestEntry[]>();
  for (const entry of included) {
    const parts = entry.path.split('/').filter(Boolean);
    const section = parts.length >= 2 ? parts[0] : '__root';
    if (!sections.has(section)) sections.set(section, []);
    sections.get(section)!.push(entry);
  }

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
// Content extraction utilities
// ---------------------------------------------------------------------------

interface FrontmatterData {
  title?: string;
  description?: string;
  features?: string[];
  addToLLMs?: boolean;
  llms?: { addToLLMs?: boolean; itemsAddToLLMs?: boolean };
  [key: string]: any;
}

/** Parse YAML frontmatter into a plain object (values only, no arrays/nested objects complexity) */
function parseFrontmatter(src: string): FrontmatterData {
  const match = src.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const data: FrontmatterData = {};
  const yaml = match[1];

  // title / description — quoted or unquoted string fields
  for (const field of ['title', 'description']) {
    // Match: field: "value" or field: 'value' or field: value (unquoted)
    const m = yaml.match(new RegExp(`^${field}:\\s*(?:"([^"\\n]*)"|'([^'\\n]*)'|([^\\n#]+))`, 'm'));
    if (m) data[field] = (m[1] ?? m[2] ?? m[3] ?? '').trim();
  }

  // features: list of "- item" strings
  const featMatch = yaml.match(/^features:\s*\n((?:\s+-[^\n]+\n?)+)/m);
  if (featMatch) {
    data.features = featMatch[1]
      .split('\n')
      .map((l) => l.replace(/^\s+-\s*["']?/, '').replace(/["']$/, '').trim())
      .filter(Boolean);
  }

  // llms.addToLLMs / llms.itemsAddToLLMs
  const llmsBlock = yaml.match(/^llms:\s*\n((?:\s+[^\n]+\n?)+)/m);
  if (llmsBlock) {
    const block = llmsBlock[1];
    const addTo = block.match(/addToLLMs:\s*(true|false)/);
    const itemsAddTo = block.match(/itemsAddToLLMs:\s*(true|false)/);
    data.llms = {
      addToLLMs: addTo ? addTo[1] === 'true' : undefined,
      itemsAddToLLMs: itemsAddTo ? itemsAddTo[1] === 'true' : undefined,
    };
  }

  return data;
}

/** Strip frontmatter and return the body text */
function stripFrontmatter(src: string): string {
  return src.replace(/^---[\s\S]*?---\n?/, '').trim();
}

/**
 * Extract clean prose from an MDX body.
 *
 * Mode 1 — HTML prose (blog posts): <section>/<p> structure, no imports
 * Mode 2 — JSX component files: pull <p> text, TrustStatement, description= and heading= props
 * Mode 3 — Plain markdown: no imports, no HTML tags — return as-is after stripping JSX lines
 */
function extractMdxBody(filePath: string): string | undefined {
  const raw = readFileSync(filePath, 'utf8');
  const body = stripFrontmatter(raw);
  if (!body) return undefined;

  const hasImports = /^import\s/m.test(body);
  const hasHtmlTags = /<[a-z]/i.test(body);

  // Mode 1: HTML prose (no imports, has <section> blocks)
  if (!hasImports && /<section/.test(body)) {
    return body
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n## ${t.trim()}\n`)
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n### ${t.trim()}\n`)
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${t.trim()}`)
      .replace(/<[^>]+>/g, '')
      .split('\n').map((l) => l.trim()).filter(Boolean)
      .join('\n').replace(/\n{3,}/g, '\n\n').trim() || undefined;
  }

  // Mode 3: Plain markdown (no imports, no HTML)
  if (!hasImports && !hasHtmlTags) {
    const prose = body
      .split('\n')
      .filter((l) => !/^export\s/.test(l.trim()))
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    return prose || undefined;
  }

  // Mode 2: JSX component files — extract readable strings
  const lines: string[] = [];

  // <p>...</p> inline prose
  for (const m of body.matchAll(/<p>([\s\S]*?)<\/p>/g)) {
    const text = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (text.length > 15) lines.push(text);
  }

  // TrustStatement text="..."
  for (const m of body.matchAll(/TrustStatement[^/]*?text=["']([^"']+)["']/g)) {
    lines.push(m[1].trim());
  }

  // JSX prop description="..." single-line
  for (const m of body.matchAll(/\bdescription=["']([^"']{20,})["']/g)) {
    lines.push(m[1].trim());
  }

  // heading="..." single-line JSX prop
  for (const m of body.matchAll(/\bheading=["']([^"']{10,})["']/g)) {
    lines.push(m[1].trim());
  }

  // heading={{ before/text/after }} — join into one phrase
  const hParts = [
    ...[...body.matchAll(/\bbefore:\s*["']([^"']+)["']/g)].map((m) => m[1]),
    ...[...body.matchAll(/\btext:\s*["']([^"']+)["']/g)].map((m) => m[1]),
    ...[...body.matchAll(/\bafter:\s*["']([^"']+)["']/g)].map((m) => m[1]),
  ];
  if (hParts.length) lines.push(hParts.join(' ').trim());

  // Card/object description: "..." (single or next-line string)
  for (const m of body.matchAll(/\bdescription:\s*\n?\s*["']([^"']{20,})["']/g)) {
    lines.push(`- ${m[1].trim()}`);
  }

  // textContent array strings (used in SolutionsSection etc.)
  for (const m of body.matchAll(/textContent=\{?\[[\s\S]*?\]/g)) {
    for (const s of m[0].matchAll(/["']([^"']{30,})["']/g)) {
      lines.push(s[1].trim());
    }
  }

  const seen = new Set<string>();
  const unique = lines.filter((l) => {
    const key = l.trim();
    if (!key || seen.has(key)) return false;
    if (/^[{}\[\]];?$/.test(key)) return false;
    if (/^(icon|title|order|type):\s*["']/.test(key)) return false;
    seen.add(key);
    return true;
  });

  return unique.length ? unique.join('\n\n') : undefined;
}

// ---------------------------------------------------------------------------
// Collection reader — for non-paged collections
// ---------------------------------------------------------------------------

interface CollectionItem {
  slug: string;
  title: string;
  description?: string;
  features?: string[];
  body?: string;
}

interface CollectionData {
  name: string;
  metaTitle: string;
  metaDescription?: string;
  items: CollectionItem[];
}

function readCollection(collectionDir: string, collectionName: string): CollectionData | null {
  if (!existsSync(collectionDir)) return null;

  const metaPath = join(collectionDir, '_meta.mdx');
  if (!existsSync(metaPath)) return null;

  const metaRaw = readFileSync(metaPath, 'utf8');
  const meta = parseFrontmatter(metaRaw);

  // Respect llms opt-outs set in _meta.mdx
  if (meta.llms?.addToLLMs === false && meta.llms?.itemsAddToLLMs === false) return null;
  if (meta.llms?.itemsAddToLLMs === false) return null;

  const metaTitle = meta.title ?? collectionName.charAt(0).toUpperCase() + collectionName.slice(1).replace(/-/g, ' ');
  const metaDescription = meta.description;

  const files = readdirSync(collectionDir)
    .filter((f) => f.endsWith('.mdx') && f !== '_meta.mdx')
    .sort();

  const items: CollectionItem[] = [];
  for (const file of files) {
    const filePath = join(collectionDir, file);
    const raw = readFileSync(filePath, 'utf8');
    const fm = parseFrontmatter(raw);

    if (!fm.title) continue;
    if (fm.llms?.addToLLMs === false) continue;

    const body = extractMdxBody(filePath);

    items.push({
      slug: file.replace(/\.mdx$/, ''),
      title: fm.title,
      description: fm.description,
      features: fm.features,
      body,
    });
  }

  if (!items.length) return null;

  return { name: collectionName, metaTitle, metaDescription, items };
}

// ---------------------------------------------------------------------------
// llms-full.txt
// ---------------------------------------------------------------------------

function buildLlmsFull(entries: PageManifestEntry[], siteUrl: string, srcDir: string): string {
  const blocks: string[] = [
    `# ${siteData.title}`,
    `> ${siteData.tagline}`,
    '',
    siteData.description,
    '',
    ...(siteData.location ? [`Location: ${siteData.location}`, ''] : []),
    `Full content: ${siteUrl}/llms-full.txt`,
    `Summary index: ${siteUrl}/llms.txt`,
    '',
  ];

  // ── Part 1: Paged content via manifest ──────────────────────────────────
  // These are real URLs — include title, description, and extracted body prose.

  const pagedEntries = entries
    .filter((e) => e.addToLLMs && !e.robots.includes('noindex'))
    .sort((a, b) => a.path.localeCompare(b.path));

  if (pagedEntries.length) {
    blocks.push('---', '', '## Pages', '');

    for (const entry of pagedEntries) {
      const label = entry.title.replace(/ \| .*$/, '').trim() || entry.path;
      const url = `${siteUrl}${entry.path}`;

      // Only try to resolve source for collection item pages (two-segment paths)
      const parts = entry.path.replace(/^\//, '').split('/');
      let body: string | undefined;
      let features: string[] | undefined;
      if (parts.length === 2) {
        const [collection, slug] = parts;
        const mdxPath = join(srcDir, 'src', 'content', collection, `${slug}.mdx`);
        if (existsSync(mdxPath)) {
          const fm = parseFrontmatter(readFileSync(mdxPath, 'utf8'));
          features = fm.features;
          body = extractMdxBody(mdxPath);
        }
      }

      const section = [
        '---',
        '',
        `### ${label}`,
        `URL: ${url}`,
      ];
      if (entry.description) section.push(`> ${entry.description}`);
      section.push('');
      if (features?.length) {
        for (const f of features) section.push(`- ${f}`);
        section.push('');
      }
      if (body) section.push(body, '');

      blocks.push(section.join('\n'));
    }
  }

  // ── Part 2: Non-paged collection content ────────────────────────────────
  // No URLs — pure knowledge context for AI.

  const contentDir = join(srcDir, 'src', 'content');
  if (!existsSync(contentDir)) {
    blocks.push('---');
    return blocks.join('\n');
  }

  const allCollections = readdirSync(contentDir).filter((name) => {
    if (EXCLUDED_COLLECTIONS.has(name)) return false;
    return existsSync(join(contentDir, name, '_meta.mdx'));
  });

  // Only process collections where items have no pages (not already covered above)
  const pagedCollections = new Set(
    pagedEntries
      .map((e) => e.path.replace(/^\//, '').split('/'))
      .filter((p) => p.length === 2)
      .map((p) => p[0])
  );

  const nonPagedCollections = allCollections.filter((name) => !pagedCollections.has(name));

  const collectionData: CollectionData[] = [];
  for (const name of nonPagedCollections.sort()) {
    const data = readCollection(join(contentDir, name), name);
    if (data) collectionData.push(data);
  }

  if (collectionData.length) {
    blocks.push('---', '', '## Supporting Content', '');
    blocks.push('> The following content has no dedicated page URL but provides context about how we work, what we offer, and what clients ask.');
    blocks.push('');

    for (const collection of collectionData) {
      blocks.push(`### ${collection.metaTitle}`);
      if (collection.metaDescription) blocks.push(``, `${collection.metaDescription}`, ``);
      blocks.push('');

      for (const item of collection.items) {
        const itemLines = [`**${item.title}**`];
        if (item.description) itemLines.push(item.description);
        if (item.features?.length) {
          itemLines.push('');
          for (const f of item.features) itemLines.push(`- ${f}`);
        }
        if (item.body) {
          itemLines.push('');
          itemLines.push(item.body);
        }
        blocks.push(itemLines.join('\n'));
        blocks.push('');
      }
    }
  }

  blocks.push('---');
  return blocks.join('\n');
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
        const srcDir = join(distDir, '..');
        const entries = readManifest(distDir);

        if (!entries.length) {
          logger.warn('robots-llms: no manifest entries found in dist/__seo/ — output files will be minimal.');
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

        try {
          writeFileSync(join(distDir, 'llms-full.txt'), buildLlmsFull(entries, siteUrl, srcDir), 'utf8');
          logger.info('llms-full.txt generated.');
        } catch (err: any) {
          logger.error(`llms-full.txt generation failed: ${err.message}`);
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
