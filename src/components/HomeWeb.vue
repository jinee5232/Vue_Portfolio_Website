<template>
  <div>
    <swiper
      :slidesPerView="swiperSlidesPerView"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in filteredWebData"
        :key="index"
        class="card"
      >
        <a :href="item.url" target="_blank">
          <div class="card-imgbox">
            <img v-lazy="item.img" alt="Card Image" class="card-img" />
            <div class="opacity_div">
              <div class="img_date">
                {{ item.startdate }}-{{ item.enddate }}
              </div>
            </div>
          </div>
        </a>
        <div class="card-intrbox2">
          <h4 class="card-title2">{{ item.name }}</h4>
          <div class="card_type">
            <div class="card-smalltype">
              <p v-for="(item2, index) in item.Smalltype" :key="index">
                {{ item2 }}
              </p>
              <p v-if="item.API" class="API_type">
                {{ item.API }}
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default {
  props: {
    colors: Object,
  },
  data() {
    return {
      PortfolioData: [],
      swiperSlidesPerView: 3,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  computed: {
    filteredWebData() {
      return this.PortfolioData.filter((item) => item.Bigtype.includes("網頁"));
    },
  },
  mounted() {
    this.fetchWebData();
    // 監聽視窗寬
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    // 移除窗口大小变化的监听器，以避免内存泄漏
    window.removeEventListener("resize", this.handleResize);
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
    handleResize() {
      // 獲取視窗寬度
      const windowWidth = window.innerWidth;
      // 根据窗口宽度决定slidesPerView的值
      if (windowWidth <= 1440 && windowWidth >= 769) {
        this.swiperSlidesPerView = 2;
      } else if (windowWidth <= 768) {
        this.swiperSlidesPerView = 1;
      } else {
        this.swiperSlidesPerView = 3;
      }
    },
  },
};
</script>
<style scoped>
.mySwiper {
  height: 550px;
  width: 90vw;
  cursor: pointer;
}

.card {
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 30%;
  font-size: 18px;
  background: var(--primary-color);
  align-items: center;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .card-imgbox {
    width: 100%;
    overflow: hidden;
    transition: all;
    position: relative;
    .opacity_div {
      display: none;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      .img_date {
        color: var(--primary-color);
      }
    }
    &:hover > img {
      transform: scale(1.1);
    }
    &:hover > .opacity_div {
      display: flex;
    }
  }
  .card-intrbox2 {
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    h4 {
      line-height: 4rem;
      font-weight: bolder;
    }

    .card_type {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .card-smalltype {
        display: flex;
        flex-wrap: wrap;
        .API_type {
          background-color: var(--background-color);
          color: var(--primary-color);
        }
        p {
          padding: 0 5px;
          margin-right: 1rem;
          border-radius: 0.5rem;
          background-color: var(--accent-color);
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .mySwiper {
    height: 300px;
    width: 90vw;
    cursor: pointer;
  }
  .card {
    position: relative;
    height: 300px;
    .card-intrbox2 {
      background-image: linear-gradient(
        to top,
        var(--primary-color) 30%,
        transparent 100%
      );
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 5;
      box-sizing: border-box;
      width: 100%;
      padding: 20px;
      h4 {
        line-height: 4rem;
        font-weight: bolder;
        display: inline-block;
        padding: 0 1rem;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.6);
      }

      .card_type {
        display: flex;
        width: 100%;
        flex-wrap: wrap;

        .card-smalltype {
          display: flex;
          flex-wrap: wrap;
          .API_type {
            background-color: var(--background-color);
            color: var(--primary-color);
          }
          p {
            padding: 0 2px;
            margin-right: 1rem;
            border-radius: 0.5rem;
            background-color: var(--accent-color);
            margin-bottom: 0.5rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
