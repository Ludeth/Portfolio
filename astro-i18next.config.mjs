/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it"],
};

/*
import en from "./public/locales/en/translation.json" assert {type: "json"};
import it from "./public/locales/it/translation.json" assert {type: "json"};

export default {
    defaultLocale: "en",
    locales: ["en", "it"],
    fallbackLng : "en",
    i18nextServer: {
      debug: true,
      resources: {
        en: {
          translation: {
              ...en
          }
        },
        it: {
          translation: {
              ...it
          }
        }
      },
      initImmediate: false,
      preload: true,
      backend: null
    },
    i18nextServerPlugins: {
      fsBackend: null
    }
  };
  */