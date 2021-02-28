<template>
  <div>
    
    <v-container fluid class="root" :style="`background-image: url('${require('~/assets/bg/bg_0.svg')}');`">
      <v-container>
        <div class="section section--reverse section--low-margin">
          <div class="section__item section__item--big">
            <div>
              <div :style=" winWidth > mobileWidth ? 'margin: 0 100px' : 'margin: 0'">
                <span :style="{ ...style, fontSize: '14px' }">Absulately</span>
                <div :style="{ ...style, fontSize: winWidth > mobileWidth ? '52px' : '32px',}">Free extention</div>
              </div>
              <img class="section__item__card__image" :src="require('~/assets/img/card/card.svg')" alt=""/>
            </div>
          </div>

          <div class="section__item section__item--small">
            <div class="main-item">
              <div class="section__item__title main-title">
                Shop Online with Confidence
              </div>
              <div class="section__item__title section__item__content">
                Safe Deal products you from online security issuse
              </div>
              <button class="button button--reverse">Add to Chrome</button>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- section How to use -->
    <v-container fluid>
      <v-container>
        <div class="section section--low-margin section__item--column">
          <div class="section__title">
            <div>How to Use</div>
            <div style="width: 60px; height: 5px; background-color: #00aa63"></div>
          </div>
          <div class="section__item section__item--how-to">
            <img class="section__item__card__image" :src="require('~/assets/img/howTo.svg')" alt="" />
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- section 1, 2, 3 -->
    <Section v-for="(section, index) in sections" :key="`section-${index}`" :section="section" :reverse="index % 2 == 0 ? true : false"/>
    <!-- section As seen as -->
    <v-container>
      <v-container>
        <div class="section section--low-margin" style="flex-direction: column">
          <div class="section__title">As seen as</div>
          <!-- Logos -->
          <div class="section__item section__item--as-seen-as">
            <div class="logo__container"><img class="logo" :src="require('~/assets/img/logo/medium.png')" alt="" /></div>
            <div class="logo__container"><img class="logo" :src="require('~/assets/img/logo/google.png')" alt="" /></div>
            <div class="logo__container"><img class="logo" :src="require('~/assets/img/logo/slack.png')" alt="" /></div>
            <div class="logo__container"><img class="logo" :src="require('~/assets/img/logo/instagram.png')" alt=""/></div>
            <div class="logo__container"><img class="logo" :src="require('~/assets/img/logo/atlassian.png')" alt=""/></div>
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- Footer -->
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
import Section from "@/components/Section";
export default {
  components: { Section },
  data() {
    return {
      winWidth: 0,
      winHight: 0,
      mobileWidth: 960,
      sections: [
        {
          id: 1,
          title: "Find fair price",
          content: "Avoid fake discount - buy best price",
          img: require("~/assets/img/section_image_1.svg"),
          bg: require("~/assets/bg/bg_1.svg"),
        },
        {
          id: 2,
          title: "Check seller rating",
          content: "Seller reliability ratings will help you to buy safely",
          img: require("~/assets/img/section_image_2.svg"),
          bg: require("~/assets/bg/bg_2.svg"),
        },
        {
          id: 3,
          title: "Choose an alternative",
          content:
            "For each product you can quickly find similar ones, even cheaper!",
          img: require("~/assets/img/section_image_3.svg"),
          bg: require("~/assets/bg/bg_3.svg"),
        },
      ],
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
  methods: {
    handleResize() {
      this.winWidth = window.innerWidth;
      this.winHight = window.innerHeight;
    },
  },
  computed: {
    style() {
      if (this.winWidth > this.mobileWidth) {
        return { color: "#fff" };
      } else {
        return { color: "#00aa63" };
      }
    },
  },
  created() {
    if(process.browser){
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
};
</script>

<style lang="scss" scoped>
.root {
  padding: 100px 0;
  background-size: cover;
}
.section {
  display: flex;
  margin: 400px 0;
  position: relative;
}
.section--reverse {
  display: flex;
  flex-direction: row-reverse;
}
.section--low-margin {
  margin: 10px 0;
}
.section__title {
  font-size: 40px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.section__item--how-to {
  padding: 0 100px;
}
.section__bg {
  position: absolute;
  left: 0;
}
.section__title {
  font-size: 35px;
  font-weight: bold;
  padding: 20px 0;
}
.section__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.section__item--column {
  align-items: flex-start;
  flex-direction: column;
}
.section__item--small {
  width: 30%;
}
.section__item--big {
  width: 70%;
}
.section__item--as-seen-as {
  display: inline-flex;
  justify-content: space-between;
}
.section__item__card {
  padding: 55px 35px;
  border-radius: 20px;
  background-color: #fdfdfd;
  box-shadow: 0 1px 15px #d3d3d37e;
}
.section__item__card__image {
  width: 100%;
}
.section__item__title {
  color: #00aa63;
  display: flex;
  flex-direction: column;
  width: 300px;
}
.section__item__title--small {
  font-size: 35px;
}
.section__item__title--big {
  font-size: 50px;
}
.section__item__content {
  color: grey;
}
.main-item div {
  margin: 20px 0;
}
.main-title {
  color: black;
  font-size: 40px;
  font-weight: bold;
}

.logo__container {
  width: auto;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 50px;
  width: auto;
}
.bg--footer-1 {
  background-image: url("~/assets/bg/bg_footer_image_1.svg");
  background-size: cover;
}
.bg--footer-2 {
  background-image: url("~/assets/bg/bg_footer_image_2.svg");
  background-size: cover;
  background-color: #00dd8020;
}
.bg--footer-3 {
  background-color: #00dd8020;
}


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

@media (max-width: 1140px) {
  .section__item--small {
    width: 40%;
  }
  .section__item--big {
    width: 60%;
  }
}
@media (max-width: 960px) {
  .section {
    flex-direction: column-reverse;
    margin: 50px 5px;
  }
  .section--reverse {
    flex-direction: column-reverse;
  }
  .section__item--small {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .section__item--big {
    width: 100%;
  }
  .section__title {
    text-align: center;
  }
  .section__item {
    padding: 15px;
  }
  .section__item__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .section__item__title--small {
    font-size: 25px;
  }
  .section__item__title--big {
    font-size: 30px;
  }
  .main-item {
    display: flex;
    flex-direction: column;
  }
  .section__item--as-seen-as {
    display: inline-flex;
    flex-direction: column;
  }
  .section__item--column {
    flex-direction: column;
  }
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