// @ts-check
import { defineConfig } from 'astro/config';

// Change these two env vars (or the defaults) when moving to a custom domain:
//   SITE_URL=https://www.example.com BASE_PATH=/ npm run build
const site = process.env.SITE_URL || 'https://lbd-dash.github.io';
const base = process.env.BASE_PATH ?? '/template-prompt-shop/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
