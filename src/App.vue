<template>
  <v-app>
    <Header />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container>
        <v-main>
          <router-view />
        </v-main>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.link {
  text-decoration: none;
  padding: 10px;
  color: #fff;
}
.link--button {
  background-color: #fff;
  color: #20b885;
  border-radius: 5px;
  padding: 10px 25px;
}

.logo{
  width: 50px;
  height: 50px;
}
</style>
