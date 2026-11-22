// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 公開するときの URL。canonical、OGP、sitemap がこれを使う
  site: 'https://bunkasai.example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});
