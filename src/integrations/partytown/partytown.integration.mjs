// src/integrations/partytown/partytown.integration.mjs
/**
 * Conditional Partytown Integration
 *
 * Wraps @astrojs/partytown but only injects the bootstrap script
 * when there are actually scripts using type="text/partytown".
 *
 * This prevents loading ~3KB of unused JS when partytown isn't needed.
 */

import partytown from '@astrojs/partytown';

/**
 * Creates a conditional partytown integration
 * @param {Object} config - Partytown configuration
 * @param {string[]} config.forward - Array of global variables to forward (e.g., ['dataLayer.push'])
 * @param {boolean} config.debug - Enable debug mode
 */
export default function conditionalPartytownIntegration(config = {}) {
  const partytownIntegration = partytown({
    config: {
      forward: config.forward || ['dataLayer.push'],
      debug: config.debug || false,
    },
  });

  return {
    name: 'conditional-partytown',
    hooks: {
      'astro:config:setup'(options) {
        // Pass through to the real partytown integration
        // This sets up the partytown files in public/~partytown/
        if (partytownIntegration.hooks['astro:config:setup']) {
          partytownIntegration.hooks['astro:config:setup'](options);
        }
      },
      'astro:build:done'(options) {
        if (partytownIntegration.hooks['astro:build:done']) {
          partytownIntegration.hooks['astro:build:done'](options);
        }
      },
    },
  };
}
