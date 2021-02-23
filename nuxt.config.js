const I18N = require("./locale/config");

module.exports = {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#4285F4"
  },

  /*
   ** Global CSS
   */
  css: [],
  components: true,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["plugins/i18n.js", { src: "~/plugins/alert.js", mode: "client" }],
  transpile: ["vue-sweetalert2"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ["bootstrap-vue/nuxt"],
    ["nuxt-i18n", I18N],
    ["vue-social-sharing/nuxt"]
  ],
  bootstrapVue: {
    icons: false
  },
  /*
   ** Build configuration
   */
  build: {
    extend: config => {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      });
    }
  }
};
