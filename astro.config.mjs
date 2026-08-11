import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kelenva.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
