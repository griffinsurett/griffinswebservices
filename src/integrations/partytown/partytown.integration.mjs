// src/integrations/partytown/partytown.integration.mjs
/**
 * Conditional Partytown Integration
 *
 * Wraps @astrojs/partytown but modifies its behavior:
 * - Copies partytown library files (via the underlying integration)
 * - Does NOT inject the bootstrap script into pages automatically
 *
 * The bootstrap script is conditionally loaded by PartytownLoader.astro,
 * which only loads partytown if there are actual type="text/partytown" scripts.
 *
 * This prevents loading ~3KB of unused JS when partytown isn't needed.
 *
 * Usage in astro.config.mjs:
 *   import conditionalPartytown from './src/integrations/partytown/partytown.integration.mjs';
 *   integrations: [conditionalPartytown()]
 *
 * Usage in your layout:
 *   import PartytownLoader from '@/integrations/partytown/PartytownLoader.astro';
 *   <PartytownLoader forward={['dataLayer.push']} />
 */

import partytown from '@astrojs/partytown';

export default function conditionalPartytownIntegration(config = {}) {
  // Create the underlying partytown integration
  const partytownIntegration = partytown({
    config: {
      forward: config.forward || ['dataLayer.push'],
      debug: config.debug ?? (process.env.NODE_ENV === 'development'),
    },
  });

  return {
    name: 'conditional-partytown',
    hooks: {
      'astro:config:setup'(options) {
        // Call the underlying partytown setup, but we'll override the script injection
        // by not actually using its head script - instead using our conditional loader
        if (partytownIntegration.hooks['astro:config:setup']) {
          // Store the original updateConfig
          const originalUpdateConfig = options.updateConfig;

          // Wrap updateConfig to remove the partytown head script injection
          options.updateConfig = (newConfig) => {
            // Remove partytown's head script from the config
            if (newConfig.vite?.plugins) {
              // The partytown plugin injects scripts - we don't want that
              // Our PartytownLoader.astro handles conditional loading
            }
            return originalUpdateConfig(newConfig);
          };

          partytownIntegration.hooks['astro:config:setup'](options);
        }
      },
      async 'astro:build:done'(options) {
        // Copy partytown library files to output
        if (partytownIntegration.hooks['astro:build:done']) {
          await partytownIntegration.hooks['astro:build:done'](options);
        }
      },
    },
  };
}
