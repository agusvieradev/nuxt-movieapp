// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: " UTF-8" },
        { name: "viewport", content: "width=devive-width, initial-scale=1.0" },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  devtools: { enabled: false }
})
