<template>
  <div>
      <v-container class="bg--footer-1" fluid>
      <v-container>
        <div class="page">
          <div class="page__container">
            <div class="page__container__header text-primary">
              <div style="display: flex">Add <v-img width="25" height="25" :src="require('../assets/img/logo.svg')" class="logo" ></v-img><span style="font-weight: bold; margin-right: 5px">Safe Deal</span>to your brower now</div>
              <div style="display: flex">to choose the best products on</div>
            </div>
            <div class="logos">
              <div class="logo__container"><img class="logo" :src="require('../assets/img/logo/aliExpress.png')" alt=""/></div>
              <div class="logo__container"><img class="logo" :src="require('../assets/img/logo/amazon.png')" alt=""/></div>
              <div class="logo__container"><img class="logo" :src="require('../assets/img/logo/ebay.png')" alt=""/></div>
            </div>
            <div><button class="button button--reverse">Add to Chrome</button></div>
          </div>
        </div>
      </v-container>
    </v-container>
    <v-container class="bg--footer-2" fluid>
      <v-container>
        <div class="page">
            <div class="page__container">
                <div class="review__container__title">
                    <div> What people say</div>
                    <div style="width: 60px; height: 5px; background-color: #fff"></div>
                </div>
            </div>
          <div class="page__container">
            <v-carousel
              reverse-transition="fade-transition"
              transition="fade-transition"
              :continuous="false"
              :cycle="cycle"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="250"
            >
              <v-carousel-item v-for="(review, index) in reviews" :key="index">
                <v-sheet tile color="transparent">
                  <div class="review">
                    <div class="review__user">
                      <img class="review__user__avater" :src="review.avater"></v-img>
                      <div>
                        <div class="review__user__name">
                          {{ review.name }}
                        </div>
                      </div>
                    </div>
                    <div class="review__content">
                      <div>
                        {{ review.review }}
                      </div>
                    </div>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
}
.page__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.page__container__header {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
}
.text-primary {
  color: #00aa63;
}

.logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 20px 0;
}

.logo__container {
  width: auto;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 40px;
  width: auto;
}
.bg--footer-1 {
  background-image: url("../assets/bg/bg_footer_image_1.svg");
  background-size: cover;
}
.bg--footer-2 {
  background-image: url("../assets/bg/bg_footer_image_2.svg");
  background-size: cover;
  background-color: #00dd8020;
}
.bg--footer-3 {
  background-color: #00dd8020;
}

.review {
  display: flex;
  width: 500px;
}
.review__user {
  width: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.review__user__avater {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.review__user__name {
}
.review__content {
  padding: 10px;
  height: 150px;
  overflow: hidden;
  font-size: 10px;
}

.review__container__title {
  font-size: 40px;
  padding: 20px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  .logos {
    width: 350px;
  }
  .logo {
    height: 30px;
  }
  .review {
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  .review__user {
    width: 100%;
  }
  .review__user__avater {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .review__user__name {
  }
  .review__content {
    padding: 0;
    height: 100px;
  }
}
</style>