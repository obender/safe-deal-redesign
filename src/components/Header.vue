<template>
  <v-app-bar
    absolute
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    fade-img-on-scroll
    app
    content-class="header"
    fixed
    height="110px"
    color="transparent"
  >
    <div class="header">
      <div class="header__item header__item--title">
        <v-img :src="logo" class="logo"></v-img>
        <div>Safe Deal</div>
      </div>
      <div class="header__item header__item--menu">
        <div class="header__item">
          <router-link class="link" to="#features">Features</router-link>
        </div>
        <div class="header__menu__item">
          <router-link class="link" to="#mission">Mission</router-link>
        </div>
        <div class="header__menu__item">
          <router-link class="link" to="#blog">Blog</router-link>
        </div>
        <div class="header__menu__item">
          <router-link class="link" to="#support">Support</router-link>
        </div>
        <div class="header__menu__item">
          <button class="link link--button">Add to Chrome</button>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/img/logo.png"),
    };
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
.header__item--title{
    font-size: 25px;
    align-items: center;
}
.header__item--menu {
    justify-content: space-around;
    align-items: center;
}
</style>
