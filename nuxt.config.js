import theme from "./utils/theme";
const baseUrl = function () {
  if (process.env.NODE_ENV === "production") {
    return "https://v2.api.egyptkey.com/api/";
  } else {
    return "https://v2.api.egyptkey.com/api/";
  }
};

export default {
  head: {
    titleTemplate: "%s",
    title: "Company",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.xyz/npm/@mdi/font@latest/css/materialdesignicons.min.css",
      },
    ],
    script: [
      {
        src: "js/wow.min.js",
      },
      {
        src: "https://secure.clickpay.com.sa/payment/js/paylib.js",
      },
      {
        src: "js/main.js",
        body: true,
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/scss/main.scss",
    "@/assets/fonts/stylesheet.css",
    "@/assets/animate.css",
  ],
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/moment",
  ],
  moment: {
    defaultLocale: "en",
    locales: ["ar"],
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    // "~/modules/example",
    "nuxt-i18n",
    "vue-social-sharing/nuxt",
    [
      "nuxt-sweetalert2",
      {
        showCancelButton: true,
        focusConfirm: false,
      },
    ],
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyA4aIvYCw4Lue1p8Ytm24H-sXS4LGR7890",
        //you can use libraries: ['places']
      },
    ],
    //https://image.nuxtjs.org
    // '@nuxt/image'
  ],
  i18n: {
    locales: [
      {
        code: "ar",
        file: "ar.json",
        name: "arabic",
        icon: "$arabicIcon",
      },
      {
        code: "en",
        file: "en.json",
        name: "english",
        icon: "$englishIcon",
      },
    ],
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    langDir: "locales/",
    lazy: true,
    useCookie: true,
    cookieKey: "language",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ar",
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["assets/scss/_variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      light: true,

      themes: {
        dark: theme.dark,
        light: theme.light,
      },
    },
  },
  serverMiddleware: ["~/middleware/server"],
  router: {
    middleware: ["routeChange"],
  },
  axios: {
    baseURL: baseUrl(),
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/signin",
            method: "post",
            propertyName: "access_token",
          },
          logout: { url: "/signout", method: "delete" },
          user: {
            url: "user/profile",
            method: "get",
          },
        },
      },
    },
    redirect: false,
    plugins: [{ src: "~/plugins/axios", ssr: true }],
  },
  plugins: [
    { src: "@/plugins/api.js" },
    { src: "@/plugins/vuetify.js" },
    { src: "@/plugins/initializer.js", ssr: false },
    { src: "@/plugins/facebook.js", ssr: false },
    { src: "@/plugins/vuelidate.js" },
    { src: "@/plugins/toasted.js", ssr: false },
    { src: "@/plugins/vue-awesome-swiper.js", ssr: false },
  ],
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // You can extend webpack config here
    // config.resolve.alias['~'] = './store_submodules'
    // Run ESLint on save
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
