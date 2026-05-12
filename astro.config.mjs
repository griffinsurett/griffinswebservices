// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { buildRedirectConfig } from './src/utils/redirects';
import { manualChunks, assetFileNames } from './vite.chunks.js';
import iconGeneratorIntegration from './src/integrations/icons/icon-generator.integration.mjs';
import clientDirectivesIntegration from './src/integrations/client-directives/client-directives.integration.mjs';
import conditionalPartytown from './src/integrations/partytown/partytown.integration.mjs';
import robotsLlmsIntegration from './src/integrations/robots-llms/robots-llms.integration.ts';
import chatbotKbIntegration from './src/integrations/chatbot/chatbot-kb.integration.ts';
import { SITE_URL } from './src/content/siteData.ts';

const redirects = await buildRedirectConfig();

console.log(`Site URL: ${SITE_URL}`);

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  server: { port: 9999 },
  adapter: vercel(),
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240, // 10KB - will inline your 7.3KB CSS automatically
      cssCodeSplit: true,
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames,
          manualChunks,
        },
      },
    },
    css: {
      devSourcemap: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
  },
  
  integrations: [
    clientDirectivesIntegration(),
    iconGeneratorIntegration(),
    mdx(),
    react({
      include: ['**/react/*', '**/components/**/*.jsx', '**/components/**/*.tsx', '**/hooks/**/*.js', '**/hooks/**/*.ts'],
    }),
    sitemap(),
    conditionalPartytown(),
    robotsLlmsIntegration(),
    chatbotKbIntegration(),
  ],
  
  build: {
    inlineStylesheets: 'always',  // Inline CSS avoids render-blocking external stylesheets
    split: true,
  },

  prefetch: false,
  
  compressHTML: true,
  redirects,

  experimental: {
    clientPrerender: false,
  },
});
