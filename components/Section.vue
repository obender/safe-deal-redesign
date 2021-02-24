<template>
  <v-container fluid class="root" :style="`background-image: url('${section.bg}');`" >
    <v-container>
      <div :class="reverse ? 'section' : 'section section--reverse'">
        <div class="section__item section__item--left">
          <div class="section__item__card"><img class="section__item__card__image" :src="section.img" alt="" /></div>
        </div>
        <div class="section__item section__item--right">
          <div class="section__item__title">
            <div class="section__item__title section__item__title--small">0{{ section.id }}</div>
            <div class="section__item__title section__item__title--big">{{ section.title }}</div>
            <div class="section__item__content">{{ section.content }}</div>
            <div><NuxtLink  class="link link--small" style="color: #00aa63" to="#" >Learn more</NuxtLink ></div>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    section: {
      required: true,
    },
    reverse: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      winWidth: 0,
      winHight: 0,
      mobileWidth: 960,
    };
  },
  methods: {
    handleResize() {
      this.winWidth = window.innerWidth;
      this.winHight = window.innerHeight;
    },
  },
  computed: {
    isMobile() {
      return this.winWidth < this.mobileWidth;
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
  background-repeat: no-repeat;
  background-size: 100%;
  background-position-y: bottom;
}
.section {
  display: flex;
  position: relative;
  margin: 100px 0;
}
.section--reverse {
  display: flex;
  flex-direction: row-reverse;
}
.section--low-margin {
  margin: 10px 0;
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
@media (max-width: 1140px) {
  .section__item--small {
    width: 40%;
  }
  .section__item--big {
    width: 60%;
  }
}
@media (max-width: 960px) {
  .root {
    background-position-y: center;
  }
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
}
</style>