<template>
  <div>
    <v-container fluid class="bg--footer-3">
      <v-container>
        <div class="footer">
          <div class="footer__item">
            <div class="footer__item__title">Safe Deal</div>
            <div class="footer__item__list">
              <div class="footer__item__list__item">
                All right reserved @2021
              </div>
            </div>
          </div>
          <div class="footer__item">
            <div class="footer__item__title">Safe Deal</div>
            <div class="footer__item__lists">
              <div class="footer__item__list">
                <div class="footer__item__list__item">Opera</div>
                <div class="footer__item__list__item">Microsoft Edge</div>
                <div class="footer__item__list__item">Yandex Browser</div>
                <div class="footer__item__list__item">Google Chrome</div>
              </div>
              <div class="footer__item__list">
                <div class="footer__item__list__item">Privecy Policy</div>
                <div class="footer__item__list__item">User Agreement</div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
.bg--footer-3 {
  background-color: #00dd8020;
}
.footer {
  color: #00aa63;
  display: flex;
  justify-content: space-between;
  margin: 50px 0
}
.footer__item {
}
.footer__item {
}
.footer__item__title {
  font-weight: bold;
  font-size: 20px;
}
.footer__item__lists {
  display: flex;
}

.footer__item__list:first-child {
  display: flex;
  flex-direction: column;
}
.footer__item__list:first-child {
  padding-right: 20px;
}
.footer__item__list__item {
}

@media (max-width: 960px) {
}
</style>