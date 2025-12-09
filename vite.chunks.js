// vite.chunks.js

export function manualChunks(id) {
  // Core React runtime (kept small and shared)
  if (
    id.includes('node_modules/react') ||
    id.includes('node_modules/react-dom') ||
    id.includes('node_modules/scheduler')
  ) {
    return 'react-core';
  }

  // Bundle useLazyLoad and localStorage utils together with their consumers
  // This eliminates dependency chains for lazy-loaded components
  if (
    id.includes('hooks/useLazyLoad') ||
    id.includes('utils/storage') ||
    (id.includes('/Lazy') && id.includes('components'))
  ) {
    return 'lazy-utils';
  }
}

export function assetFileNames(assetInfo) {
  if (assetInfo.name?.endsWith('.css')) {
    if (assetInfo.name.includes('global') || assetInfo.name.includes('base')) {
      return 'assets/critical-[hash][extname]';
    }
    return 'assets/styles-[hash][extname]';
  }
  return 'assets/[name]-[hash][extname]';
}
