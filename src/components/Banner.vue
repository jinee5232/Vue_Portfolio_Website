<template>
  <div class="Banner">
    <div class="BannerTitle">
      <h1 class="Portfolio-Font">PORTFOLIO</h1>
      <router-link to="/About">
        <div class="DengJY-Font">
          <h2>J.Y</h2>
          <h2>Deng</h2>
        </div>
      </router-link>
    </div>

    <Vue3Marquee class="mySwiper" :duration="150">
      <swiper-slide
        v-for="(item, index) in PortfolioData"
        :key="index"
        class="pic-container"
      >
        <img :src="item.img" :alt="item.name"
      /></swiper-slide>
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";

export default {
  data() {
    return {
      PortfolioData: [],
    };
  },
  props: {
    colors: Object,
  },
  components: {
    Vue3Marquee,
  },
  setup() {
    return {};
  },
  mounted() {
    this.fetchWebData();
  },
  methods: {
    fetchWebData() {
      fetch("/Vue_Portfolio_Website/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
          this.PortfolioData = data;
        })
        .catch((error) => {
          console.error("Error fetching web data:", error);
        });
    },
  },
};
</script>
<style scoped>
.Banner {
  box-sizing: border-box;
  text-align: center;
  width: 100vw;
  padding-top: 5rem;
  height: calc(100vh - 90px);
  .BannerTitle {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
    .Portfolio-Font {
      display: block;
      color: var(--primary-color);
      text-shadow: rgba(255, 255, 255, 0.24) 0px 10px 10px;
      animation: downToup 3s forwards;
    }
    .DengJY-Font {
      height: 250px;
      width: 250px;
      background-color: var(--box-color);
      display: flex;
      text-align: left;
      padding: 20px;
      justify-content: center;
      margin-left: 10px;
      flex-direction: column;
      font-weight: bolder;
      color: var(--accent-color);
      opacity: 0;
      animation: opactityshow 1s forwards;
      animation-delay: 3s;
      position: relative;
      &::before {
        position: absolute;
        transition: all 0.5s ease-out;
        height: 100%;
        width: 100%;
        right: -10%;
        bottom: -10%;
        content: "";
        border-right: 5px solid;
        border-bottom: 5px solid;
        border-color: var(--accent-color);
        transform: all 3s le;
      }
      &:hover {
        transform: translate(5%);
        &:before {
          right: -5%;
          bottom: -5%;
        }
      }
    }
  }
}
@keyframes downToup {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes opactityshow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.mySwiper {
  display: flex;
  margin-right: 0;
  margin-left: auto;
  width: 80%;
  overflow: hidden;
  height: 500px;
  margin-bottom: 3rem;
  /* animation: marquee 60s forwards infinite linear; */
  .marquee-container {
    display: flex;
    -webkit-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
    position: relative;
    /* $colors.primary-space: nowrap;  防止内容换行  */
    /* animation: marquee 15s linear infinite; 使用动画实现跑马灯效果 */
  }
  .pic-container {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: contain;
    height: 500px; /* 图片的高度占据容器的高度 */
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
/* 手機尺寸（小於等於 767px） */
@media only screen and (max-width: 768px) {
  .Banner {
    padding-top: 0px;
    position: relative;
    .BannerTitle {
      position: absolute;
      z-index: 10;
      height: 100%;
      display: flex;
      width: 100%;
      text-align: left;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0rem;
      padding-left: 1rem;
      backdrop-filter: blur(3px);
    }
    .mySwiper {
      display: flex;
      margin-right: 0;
      margin-left: auto;
      width: 100%;
      overflow: hidden;
      height: 100%;
      margin-bottom: 3rem;
      /* animation: marquee 60s forwards infinite linear; */
      .marquee-container {
        display: flex;
        -webkit-transition-timing-function: linear !important;
        transition-timing-function: linear !important;
        position: relative;
        /* $colors.primary-space: nowrap;  防止内容换行  */
        /* animation: marquee 15s linear infinite; 使用动画实现跑马灯效果 */
      }
      .pic-container {
        height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
      }

      img {
        object-fit: contain;
        height: 100%; /* 图片的高度占据容器的高度 */
      }
    }
  }
}
/* 平板電腦尺寸（768px 到 1023px） */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .Banner {
    padding-top: 0px;
    position: relative;
    .BannerTitle {
      position: absolute;
      z-index: 10;
      height: 100%;
      display: flex;
      width: 100%;
      text-align: left;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0rem;
      padding-left: 1rem;
      backdrop-filter: blur(3px);
    }
    .mySwiper {
      display: flex;
      margin-right: 0;
      margin-left: auto;
      width: 100%;
      overflow: hidden;
      height: 100%;
      margin-bottom: 3rem;
      /* animation: marquee 60s forwards infinite linear; */
      .marquee-container {
        display: flex;
        -webkit-transition-timing-function: linear !important;
        transition-timing-function: linear !important;
        position: relative;
        /* $colors.primary-space: nowrap;  防止内容换行  */
        /* animation: marquee 15s linear infinite; 使用动画实现跑马灯效果 */
      }
      .pic-container {
        height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
      }

      img {
        object-fit: contain;
        height: 100%; /* 图片的高度占据容器的高度 */
      }
    }
  }
}
/* 筆記型電腦尺寸（1024px 到 1279px） */
@media only screen and (min-width: 1025px) and (max-width: 1279px) {
  /* 樣式內容 */
}
/* 桌上型電腦及以上尺寸（1280px 及以上） */
@media only screen and (min-width: 1280px) {
  /* 樣式內容 */
}
</style>
