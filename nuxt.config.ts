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

  buildModules: ['@nuxt/typescript-build'],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
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
  }

});

console.log();
