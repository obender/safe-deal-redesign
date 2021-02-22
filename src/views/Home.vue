<template>
  <div>
    <div class="page page--reverse page--low-margin">
      <div class="page__item page__item--big">
        <div>
          <div :style=" winWidth > mobileWidth? 'margin: 0 100px': 'margin: 0 50px'">
            <span :style="{ ...style, fontSize: '14px' }">Absulately</span>
            <div :style="{ ...style, fontSize: '52px' }">Free extention</div>
          </div>
          <img
            class="page__item__card__image"
            :src="require('../assets/img/card/card.svg')"
            alt=""
          />
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
    <div
      v-for="(page, index) in pages"
      :key="index"
      :class="page.id % 2 !== 0 ? 'page' : 'page page--reverse'"
    >
      <div class="page__item page__item--left">
        <div class="page__item__card">
          <img class="page__item__card__image" :src="page.img" alt="" />
        </div>
      </div>
      <div class="page__item page__item--right">
        <div class="page__item__title">
          <div class="page__item__title page__item__title--small">
            0{{ index + 1 }}
          </div>
          <div class="page__item__title page__item__title--big">
            {{ page.title }}
          </div>
          <div class="page__item__content">
            {{ page.content }}
          </div>
          <div>
            <router-link class="link link--small" style="color: #00aa63" to="#"
              >Learn more</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winWidth: 0,
      winHight: 0,
      mobileWidth: 960,
      pages: [
        {
          id: 1,
          title: "Find fair price",
          content: "Avoid fake discount - buy best price",
          img: require("../assets/img/page_image_1.svg"),
        },
        {
          id: 2,
          title: "Check seller rating",
          content: "Seller reliability ratings will help you to buy safely",
          img: require("../assets/img/page_image_2.svg"),
        },
        {
          id: 3,
          title: "Choose an alternative",
          content:
            "For each product you can quickly find similar ones, even cheaper!",
          img: require("../assets/img/page_image_2.svg"),
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
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  margin: 200px 0;
  position: relative;
}
.page--reverse {
  display: flex;
  flex-direction: row-reverse;
}
.page--low-margin {
  margin: 10px 0;
}
.page__bg {
  position: absolute;
  left: 0;
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
}
</style>