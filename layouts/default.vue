<template>
  <div :dir="$dir()" class="wrapper index mm-page mm-slideout">
    <top/>
      <div class="main" id="main">
        <nuxt/>
      </div>
    <botom/>
  </div>
</template>
<script>
import Top from "./components/Top";
import Botom from "./components/Botom";
export default {
  components: {
    Top,
    Botom
  }
};
</script>
<style lang="scss">
@import "../assets/css/app.scss";
</style>
