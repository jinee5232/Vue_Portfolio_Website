<template>
  <div>
    <div
      v-for="(group, sectype, index) in groupedData"
      :key="sectype"
      class="group"
    >
      <div class="group_title">
        <span
          >Type <span class="span2">{{ index + 1 }}</span>
        </span>
        <span> {{ sectype }}</span>
      </div>

      <swiper
        :slidesPerView="'auto'"
        :modules="modules"
        :loop="true"
        :allowTouchMove="false"
        class="mySwiper"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }"
        :speed="3000"
      >
        <swiper-slide
          v-for="(item, index) in group.Paint"
          :key="index"
          class="card"
        >
          <!-- <a :href="item.url" target="_blank"> -->
          <div class="card-imgbox">
            <img v-lazy="item.img" alt="Card Image" class="card-img" />
          </div>
          <!-- </a> -->
        </swiper-slide>
      </swiper>
      <div class="card-info">{{ group.Infotype }}</div>
      <router-link :to="`/illstration/${sectype}`">
        <div class="card-btn">
          <span class="btnmove">see more</span>
          <div class="btncircle">
            <img class="arrow1" v-lazy="'./right-arrow.svg'" alt="" />
            <img class="arrow2" v-lazy="'./right-arrow.svg'" alt="" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
export default {
  data() {
    return {
      PortfolioData: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  computed: {
    groupedData() {
      const grouped = {};
      this.PortfolioData.forEach((item) => {
        const sectype = item.Sectype;
        const infotype = item.Infotype; // 添加此行以獲取 Infotype
        // 如果該 sectype 尚未存在於 grouped 物件中，則初始化 Paint 和 Infotype
        if (!grouped[sectype]) {
          const paintSlice = item.Paint ? item.Paint.slice(0, 7) : [];
          grouped[sectype] = {
            Paint: item.Paint ? [...paintSlice] : [],
            Infotype: infotype,
          };
        } else {
          // 否則將 Paint 添加到相應的組中
          if (item.Paint) {
            const paintSlice = item.Paint.slice(0, 7);
            grouped[sectype].Paint.push(...paintSlice);
          }
        }
      });
      return grouped;
    },
  },
  mounted() {
    this.fetchPortfolioData();
  },
  methods: {
    fetchPortfolioData() {
      fetch("/Vue_Portfolio_Website/portfolio2.json")
        .then((response) => response.json())
        .then((data) => {
          const paintingData = data.find((item) => item.Bigtype === "繪畫");
          if (paintingData) {
            this.PortfolioData = paintingData.Content;
          }
        })
        .catch((error) => {
          console.error("Error fetching web data:", error);
        });
    },
  },
};
</script>
<style scoped>
.group {
  height: 550px;
  width: 100vw;
  margin: 0 auto;
  position: relative;
  background-color: var(--primary-color);
  margin-bottom: 30px;
  animation: downToup 1s forwards;
  .group_title {
    padding: 0 5vw;
    display: flex;
    flex-wrap: wrap;
    span {
      font-size: 3rem;
      line-height: 6rem;
      font-weight: bolder;
    }
    .span2 {
      color: var(--secondary-color);
      position: relative;
      margin-right: 40px;
      &::before {
        position: absolute;
        width: 5px;
        height: 60%;
        right: -20px;
        top: 25%;
        background-color: var(--background-color);
        content: "";
      }
    }
  }
  .card-btn {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 300px;
    font-size: 50px;
    display: flex;
    .btncircle {
      width: 50px;
      height: 50px;
      border-radius: 30px;
      background-color: var(--secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: transform 0.5s ease;
      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
        transition: transform 0.5s ease;
        margin-right: 50%;
        transform: translateX(-50%);
      }
    }
    .btnmove {
      position: relative;
      display: block;
      margin-right: 10px;
      &::before {
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -5px;
        transition: transform 1s ease;
        background-color: var(--secondary-color);
        transform: scaleX(0);
        transform-origin: 0 0;
        left: 0;
        content: "";
      }
    }
    &:hover {
      .btnmove {
        color: var(--tertiary-color);
        &::before {
          transform: scaleX(100%);
        }
      }
      .btncircle {
        background-color: var(--tertiary-color);
        img {
          transform: translateX(110%);
        }
      }
    }
  }

  .card-info {
    width: 70%;
    height: 30%;
    padding: 40px 5vw;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 700;
  }
  .mySwiper {
    width: 100%;
    height: 50%;
    .card {
      height: 100%;
      width: 350px;
      .card-imgbox {
        height: 100%;
        display: flex;
        justify-content: center;
        img {
          display: block;
          height: 100%;
          object-fit: cover;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
            rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        }
      }
    }
  }
}
@keyframes downToup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes righttoleft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(110%);
  }
}
@media only screen and (max-width: 768px) {
  .group {
    height: 500px;
    .card-info {
      display: none;
    }
    .card-btn {
      right: 10px;
      bottom: 30px;
      width: 200px;
      font-size: 30px;
      .btncircle {
        width: 30px;
        height: 30px;
        border-radius: 20px;
      }
    }
    .group_title {
      padding: 0 5vw;
      span:nth-child(1) {
        font-size: 1.5rem;
        line-height: 3rem;
        font-weight: normal;
      }
      span:nth-child(2) {
        width: 100%;
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: bolder;
      }
      .span2 {
        &::before {
          width: 3px;
        }
      }
    }
    .mySwiper {
      height: 60%;
      padding: 5% 0;
      .card {
        height: 100%;
        width: 100vw;
        max-width: 380px;
      }
    }
  }
}
</style>
