const texts = require("./texts");
const I18N = {
  locales: [
    // {
    //   code: "ar",
    //   iso: "ara",
    //   name: "عربى",
    //   dir: "rtl"
    // },
    // {
    //   code: "bn",
    //   iso: "ben",
    //   name: "বাংলা",
    //   dir: "ltr"
    // },
    {
      code: "en",
      iso: "en-US",
      name: "English",
      dir: "ltr"
    },
    // {
    //   code: "es",
    //   iso: "es",
    //   name: "Española",
    //   dir: "ltr"
    // },
    // {
    //   code: "fr",
    //   iso: "fre",
    //   name: "Français",
    //   dir: "ltr"
    // },
    // {
    //   code: "he",
    //   iso: "he-IL",
    //   name: "עברית",
    //   dir: "rtl"
    // },
    // {
    //   code: "hi",
    //   iso: "hin",
    //   name: "हिंदी",
    //   dir: "ltr"
    // },
    // {
    //   code: "id",
    //   iso: "ind",
    //   name: "Bahasa Indonesia",
    //   dir: "ltr"
    // },
    // {
    //   code: "pt",
    //   iso: "por",
    //   name: "Português",
    //   dir: "ltr"
    // },
    {
      code: "ru",
      iso: "ru-RU",
      name: "Русский язык",
      dir: "ltr"
    }
    // {
    //   code: "zh",
    //   iso: "zh",
    //   name: "中文",
    //   dir: "ltr"
    // }
  ],
  strategy: "prefix_and_default",
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    alwaysRedirect: false,
    fallbackLocale: "en",
    onlyOnRoot: false,
    useCookie: false
  },
  defaultLocale: "en",
  seo: true,
  vueI18n: {
    fallbackLocale: "en",
    messages: texts
  }
};

module.exports = I18N;
