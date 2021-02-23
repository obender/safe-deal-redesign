<template>
  <b-navbar
    toggleable="md"
    class="navbar navbar-expand-lg navbar-light header-links bg-light fixed-top"
  >
    <div class="container">
      <b-navbar-brand class="navbar-brand" href="/#Home">
        <Logo />
        <span>SAFE DEAL</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-ul"></b-navbar-toggle>
      <b-collapse is-nav id="nav-ul">
        <b-navbar-nav class="navbar-nav ml-auto mt-2 mt-lg-0">
          <b-nav-item href="#benefits" right>{{ $t("Features") }}</b-nav-item>
          <b-nav-item href="#about" right>{{ $t("Mission") }}</b-nav-item>
          <b-nav-item
            href="https://medium.com/@safedeal.extension/"
            target="_blank"
            right
            >{{ $t("Blog") }}</b-nav-item
          >
          <b-nav-item href="#help" right>{{ $t("Support") }}</b-nav-item>
        </b-navbar-nav>

        <!-- <select
          class="selectpicker"
          name="locale"
          v-model="locale"
          @change="switchLocalePath(locale)"
          data-width="fit"
        >
          <option
            v-for="locale in availableLocales"
            :key="locale.code"
            :value="locale.code"
            >{{ locale.name }}</option
          >
        </select> -->
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import Logo from "~/static/img/logo-top.svg";

export default {
  components: {
    Logo
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    availableLocales() {
      return this.$i18n.locales;
    }
  }
};
</script>
