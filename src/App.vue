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
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link:hover{
  opacity: .8;
}.link--mobile{}
.link--mobile:hover{
  background-color: #eaeaea50;
}
.button {
  background-color: #fff;
  color: #20b885;
  border-radius: 5px;
  padding: 10px 25px;
}
.button:hover{
  opacity: .8;
}
.button--reverse{
  color: #fff;
  background-color: #20b885;
}
.button--full{
  width: 100%
}
.logo{
  width: 50px;
  height: 50px;
}
</style>
