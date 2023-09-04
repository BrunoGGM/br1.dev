// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "127.0.0.1"
      },
    },
  },
  modules: [
    '@nuxt/content'
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/app.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
