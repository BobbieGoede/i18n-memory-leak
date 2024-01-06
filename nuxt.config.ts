// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "eng",
    langDir: "./locales",
    // debug: true,
    locales: [
      {
        code: "eng",
        file: "en.json",
      },
    ],
  },
});
