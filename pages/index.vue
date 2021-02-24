<template>
  <div>
    <!-- Header -->
    <Header />
    <!-- Top page -->
    <v-container fluid class="root" :style="`background-image: url('${require('~/assets/bg/bg_0.svg')}');`">
      <v-container>
        <div class="page page--reverse page--low-margin">
          <div class="page__item page__item--big">
            <div>
              <div :style=" winWidth > mobileWidth ? 'margin: 0 100px' : 'margin: 0'">
                <span :style="{ ...style, fontSize: '14px' }">Absulately</span>
                <div :style="{ ...style, fontSize: winWidth > mobileWidth ? '52px' : '32px',}">Free extention</div>
              </div>
              <img class="page__item__card__image" :src="require('~/assets/img/card/card.svg')" alt=""/>
            </div>
          </div>

          <div class="page__item page__item--small">
            <div class="main-item">
              <div class="page__item__title main-title">
                Shop Online with Confidence
              </div>
              <div class="page__item__title page__item__content">
                Safe Deal products you from online security issuse
              </div>
              <button class="button button--reverse">Add to Chrome</button>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- Page How to use -->
    <v-container fluid>
      <v-container>
        <div class="page page--low-margin page__item--column">
          <div class="page__title">
            <div>How to Use</div>
            <div style="width: 60px; height: 5px; background-color: #00aa63"></div>
          </div>
          <div class="page__item page__item--how-to">
            <img class="page__item__card__image" :src="require('~/assets/img/howTo.svg')" alt="" />
          </div>
        </div>
      </v-container>
    </v-container>
    <!-- Page 1, 2, 3 -->
    <Section v-for="(section, index) in sections" :key="`section-${index}`" :section="section" :reverse="index % 2 == 0 ? true : false"/>
    <!-- Page As seen as -->
    <v-container>
      <v-container>
        <div class="page page--low-margin" style="flex-direction: column">
          <div class="page__title">As seen as</div>
          <!-- Logos -->
          <div class="page__item page__item--as-seen-as">
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
    <Footer />
  </div>
</template>

<script>
import Section from "@/components/Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Section, Footer, Header },
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
          img: require("~/assets/img/page_image_1.svg"),
          bg: require("~/assets/bg/bg_1.svg"),
        },
        {
          id: 2,
          title: "Check seller rating",
          content: "Seller reliability ratings will help you to buy safely",
          img: require("~/assets/img/page_image_2.svg"),
          bg: require("~/assets/bg/bg_2.svg"),
        },
        {
          id: 3,
          title: "Choose an alternative",
          content:
            "For each product you can quickly find similar ones, even cheaper!",
          img: require("~/assets/img/page_image_3.svg"),
          bg: require("~/assets/bg/bg_3.svg"),
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
.page {
  display: flex;
  margin: 400px 0;
  position: relative;
}
.page--reverse {
  display: flex;
  flex-direction: row-reverse;
}
.page--low-margin {
  margin: 10px 0;
}
.page__title {
  font-size: 40px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.page__item--how-to {
  padding: 0 100px;
}
.page__bg {
  position: absolute;
  left: 0;
}
.page__title {
  font-size: 35px;
  font-weight: bold;
  padding: 20px 0;
}
.page__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.page__item--column {
  align-items: flex-start;
  flex-direction: column;
}
.page__item--small {
  width: 30%;
}
.page__item--big {
  width: 70%;
}
.page__item--as-seen-as {
  display: inline-flex;
  justify-content: space-between;
}
.page__item__card {
  padding: 55px 35px;
  border-radius: 20px;
  background-color: #fdfdfd;
  box-shadow: 0 1px 15px #d3d3d37e;
}
.page__item__card__image {
  width: 100%;
}
.page__item__title {
  color: #00aa63;
  display: flex;
  flex-direction: column;
  width: 300px;
}
.page__item__title--small {
  font-size: 35px;
}
.page__item__title--big {
  font-size: 50px;
}
.page__item__content {
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
@media (max-width: 1140px) {
  .page__item--small {
    width: 40%;
  }
  .page__item--big {
    width: 60%;
  }
}
@media (max-width: 960px) {
  .page {
    flex-direction: column-reverse;
    margin: 50px 5px;
  }
  .page--reverse {
    flex-direction: column-reverse;
  }
  .page__item--small {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .page__item--big {
    width: 100%;
  }
  .page__title {
    text-align: center;
  }
  .page__item {
    padding: 15px;
  }
  .page__item__title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .page__item__title--small {
    font-size: 25px;
  }
  .page__item__title--big {
    font-size: 30px;
  }
  .main-item {
    display: flex;
    flex-direction: column;
  }
  .page__item--as-seen-as {
    display: inline-flex;
    flex-direction: column;
  }
  .page__item--column {
    flex-direction: column;
  }
}
</style>