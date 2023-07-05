import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

export default defineConfig({
  site: 'https://ludeth.github.io',
  integrations: [astroI18next()],
});
