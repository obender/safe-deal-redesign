<template>
  <div>
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
      pages: [
        {
          id: 1,
          title: "Find fair price",
          content: "Avoid fake discount - buy best price",
          img: require("../assets/img/page_image_1.svg"),
          bg: require("../assets/img/page_image_1.svg"),
        },
        {
          id: 2,
          title: "Check seller rating",
          content: "Seller reliability ratings will help you to buy safely",
          img: require("../assets/img/page_image_2.svg"),
          bg: require("../assets/img/page_image_1.svg"),
        },
        {
          id: 3,
          title: "Choose an alternative",
          content:
            "For each product you can quickly find similar ones, even cheaper!",
          img: require("../assets/img/page_image_2.svg"),
          bg: require("../assets/img/page_image_1.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  margin: 200px 5px;
}
.page--reverse {
  display: flex;
  flex-direction: row-reverse;
}
.page__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.page__item--left {
}
.page__item--right {
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
@media (max-width: 960px) {
  .page {
    display: flex;
    flex-direction: column-reverse;
    margin: 50px 5px;
  }
  .page--reverse {
    display: flex;
    flex-direction: column-reverse;
  }
  .page__item {
    padding: 15px;
  }
  .page__item__title {
    color: #00aa63;
    display: flex;
    flex-direction: column;
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
}
</style>