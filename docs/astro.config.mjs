import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import deno from '@astrojs/deno';

import { getSiteURL, getBase, checkIsDENO } from './src/utils/env';

const serverConfig = {
  output: 'server',
  adapter: deno(),
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    sitemap(),
    tailwind(),
  ],
  outDir: '../dist',
  site: getSiteURL(),
  base: getBase(),
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  ...(checkIsDENO() ? serverConfig : {}),
});
