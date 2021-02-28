<template>
  <v-app>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="100vh">
      <Header />
      <nuxt />
      <Footer />
    </v-sheet>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Header, Footer }
};
</script>

<style lang="scss">
$primaryColor: #00aa63;

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.link {
  text-decoration: none;
  font-size: 23px;
}
.link--small {
  font-size: 16px;
}
.link:hover {
  opacity: 0.8;
}
.link--mobile {
  padding: 10px;
  display: flex;
}
.link--mobile:hover {
  background-color: #eaeaea50;
}
.button {
  background-color: #fff;
  color: $primaryColor;
  border-radius: 5px;
  padding: 10px 25px;
}
.button:hover {
  opacity: 0.8;
}
.button--reverse {
  color: #fff;
  background-color: $primaryColor;
}
.button--full {
  width: 100%;
}
.logo {
  padding: 5px;
  height: 50px;
}
</style>
