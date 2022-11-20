import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import deno from '@astrojs/deno';
import { getSiteURL, getBase, checkIsSSR } from './src/utils/env';
import node from '@astrojs/node';
const serverConfig = {
  output: 'server',
  adapter: process.env.SITE === 'deno' ? deno() : node({ mode: 'standalone' }),
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
  ...(checkIsSSR() ? serverConfig : {}),
});
