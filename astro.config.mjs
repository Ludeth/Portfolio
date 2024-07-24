import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dimarsilio.it/',
  integrations: [astroI18next(),sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        it: 'it-IT',
      },
    },
  })],
});
