import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://biker-os.zekrost.com',
  integrations: [sitemap()],
});
