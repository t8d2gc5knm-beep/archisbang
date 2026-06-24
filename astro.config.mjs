// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://archisbang.com',
  // Placeholder nav routes (/progetti, /studio…) don't exist yet — keep
  // prefetch off this round so it doesn't flood 404s. Re-enable later.
  prefetch: false,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
