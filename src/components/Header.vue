<template>
  <div>
    <v-app-bar
      ref="topbar"
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      fade-img-on-scroll
      app
      content-class="header"
      fixed
      height="80px"
      :color="scroll > 0 ? 'white' : 'transparent'"
    >
      <div class="header">
        <div class="header__item header__item--title">
          <v-img :src="logo" class="logo"></v-img>
          <div :class="scroll > 0 ? 'mx-2' : 'mx-2'" style="color: #71DF82;">Safe Deal</div>
        </div>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <div class="header__item header__item--menu hidden-sm-and-down">
          <div v-for="(menu, index) in menus" :key="index" class="header__item">
            <router-link
              :style="scroll > 0 ? 'color: #71DF82' : 'color: white'"
              class="link"
              :to="menu.link"
              >{{ menu.name }}</router-link
            >
          </div>
          <div class="header__menu__item mx-6">
            <button :class="scroll > 0 ? 'button button--reverse' : 'button'">
              Add to Chrome
            </button>
          </div>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link
            class="link link--mobile"
            style="color: #71DF82;"
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.link"
          >
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </router-link>

          <button class="button button--reverse button--full">
            Add to Chrome
          </button>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/img/logo.png"),
      drawer: false,
      menus: [
        { id: 1, name: "Features", link: "#features" },
        { id: 1, name: "Mission", link: "#mission" },
        { id: 1, name: "Blog", link: "#blog" },
        { id: 1, name: "Support", link: "#support" },
        { id: 1, name: "Features", link: "#features" },
      ],
      isMounted: false,
    };
  },
  computed: {
    scroll() {
      if (!this.isMounted) {
        return 0;
      }
      return this.$refs.topbar.currentScroll;
    },
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.header__item {
  display: flex;
}
.header__item--title {
  font-size: 25px;
  align-items: center;
}
.header__item--menu {
  justify-content: space-around;
  align-items: center;
}
</style>
