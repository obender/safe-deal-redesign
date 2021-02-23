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
      cycle: false,
      reviews: [
        {
          id: 1,
          avater:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP4HLuTjGwgPOJO2j85GEOgq__zHHJttpwA&usqp=CAU",
          name: "John Doe",
          review: `orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nulla nec nunc efficitur tempus et vehicula lacus. Donec massa purus, luctus sed elit eu, feugiat dapibus mauris. Duis scelerisque elit in sem luctus, pellentesque auctor risus aliquet. Etiam viverra nibh nisi, non fermentum mauris convallis ac. Proin at dignissim felis. Donec vitae diam ipsum. Quisque rutrum neque sit amet lorem accumsan, non varius lectus sollicitudin. Nunc nec vulputate risus, ut consequat est. Phasellus fermentum felis est, 
consequat rutrum velit tincidunt ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pellentesque massa in sollicitudin eleifend. In commodo gravidasagittis. Etiam at ti`,
        },
        {
          id: 2,
          avater:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP4HLuTjGwgPOJO2j85GEOgq__zHHJttpwA&usqp=CAU",
          name: "John Doe",
          review: `orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nulla nec nunc efficitur tempus et vehicula lacus. Donec massa purus, luctus sed elit eu, feugiat dapibus mauris. Duis scelerisque elit in sem luctus, pellentesque auctor risus aliquet. Etiam viverra nibh nisi, non fermentum mauris convallis ac. Proin at dignissim felis. Donec vitae diam ipsum. Quisque rutrum neque sit amet lorem accumsan, non varius lectus sollicitudin. Nunc nec vulputate risus, ut consequat est. Phasellus fermentum felis est, 
consequat rutrum velit tincidunt ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pellentesque massa in sollicitudin eleifend. In commodo gravidasagittis. Etiam at ti`,
        },
        {
          id: 3,
          avater:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlP4HLuTjGwgPOJO2j85GEOgq__zHHJttpwA&usqp=CAU",
          name: "John Doe",
          review: `orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec nulla nec nunc efficitur tempus et vehicula lacus. Donec massa purus, luctus sed elit eu, feugiat dapibus mauris. Duis scelerisque elit in sem luctus, pellentesque auctor risus aliquet. Etiam viverra nibh nisi, non fermentum mauris convallis ac. Proin at dignissim felis. Donec vitae diam ipsum. Quisque rutrum neque sit amet lorem accumsan, non varius lectus sollicitudin. Nunc nec vulputate risus, ut consequat est. Phasellus fermentum felis est, 
consequat rutrum velit tincidunt ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse pellentesque massa in sollicitudin eleifend. In commodo gravidasagittis. Etiam at ti`,
        },
      ],
    };
  },
};
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
  background-color: #dffbef;
}
.bg--footer-3 {
  background-color: #dffbef;
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