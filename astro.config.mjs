import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bikeros.co',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = '2026-08-03';
        return item;
      },
    }),
  ],
});
