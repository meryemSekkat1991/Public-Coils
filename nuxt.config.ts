import { nuxtConfig } from "nuxt-extend";

export default nuxtConfig({
  name: "coils-front",
  srcDir: __dirname,
  head: {
    title: "CoilsFront",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/",
    },
    strategies: {
      local: {
        token: {
          property: "token",
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/admin/auto-login", method: "post" },
          logout: { url: "/api/api/admin/logout", method: "delete" },
          user: { url: "/api/admin/me", method: "get" },
        },
        watchLoggedIn: true,
        rewriteRedirects: true,
        resetOnError: true
      },
    },
  },

  axios: {
    baseURL: 'http://173.212.223.175:3000',
  },

  css: ["assets/css.postcss"],

  buildModules: ['@nuxt/typescript-build', "@nuxt/postcss8","@nuxtjs/tailwindcss"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-i18n",
  ],

  router: {
    middleware: ["auth"],
    routeNameSplitter: "_",
  },

  components: [
    { path: "~/components", level: 1 },
  ],

  plugins: [
    { src: '~/plugins/vee-validate', mode: 'client' },
    { src: '~/plugins/i18n.js' }
  ],
  tailwindcss: {
    config: {
      mode: "jit",
      darkMode: "media",
      plugins: [
        // eslint-disable-next-line global-require
        require("daisyui")
      ],
      daisyui: {
        themes: false,
        rtl: false
      }
    }
  },

  i18n: {
    locales: [
      {
        name: 'English',
        code: "en",
        iso: 'en-US',
        file: "en/index.ts",
      },
      {
        name: "french",
        code: "fr",
        iso: 'fra',
        file: "fr/index.ts",
      },
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it/index.ts'
      },
    ],
    strategy: "prefix_except_default",
    langDir: "locales",
    lazy: true,
    defaultLocale: "en",
    vueI18nLoader: true,
  },

  styleExtensions: ["css", "pcss", "postcss", "scss"],
});

console.log();
