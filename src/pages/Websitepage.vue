<template>
  <div class="Webpage_bg">
    <div class="webpagecontent">
      <div
        v-for="(item, index) in WebsiteData"
        :key="index"
        class="card"
        ref="cards"
      >
        <div class="card-imgbox">
          <a :href="item.url" target="_blank">
            <img v-lazy="item.img" alt="Card Image" class="card-img"
          /></a>
          <div class="opacity_div">
            <div class="img_date">{{ item.startdate }}-{{ item.enddate }}</div>
          </div>
        </div>

        <div class="card-intrbox2">
          <h4 class="card-title2">{{ item.name }}</h4>
          <div class="card_type">
            <div class="card-smalltype">
              <p v-for="(item2, index) in item.Smalltype" :key="index">
                #{{ item2 }}
              </p>
              <p v-if="item.API" class="API_type">#{{ item.API }}</p>
            </div>
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
      WebsiteData: [],
      PortfolioData: [],
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.fetchWebsiteData();
    this.initIntersectionObserver();
  },
  methods: {
    fetchWebsiteData() {
      fetch("/Vue_Portfolio_Website/portfolio2.json")
        .then((response) => response.json())
        .then((data) => {
          const WebData = data.find((item) => item.Bigtype === "網頁");
          if (WebData) {
            this.WebsiteData = WebData.Content;
          }
        })
        .catch((error) => {
          console.error("Error fetching web data:", error);
        });
    },
    initIntersectionObserver() {
      if (this.$refs.cards) {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.playAnimation(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, options);

        this.$refs.cards.forEach((card) => {
          observer.observe(card);
        });
      }
    },
    playAnimation(target) {
      // 播放动画的方法，可以根据您的需要来实现
      // 例如添加类名来触发CSS动画
      target.classList.add("animate");
    },
  },
};
</script>
<style scoped>
.Webpage_bg {
  min-height: calc(100vh - 180px);
  margin-top: 90px;
  background-color: var(--primary-color);
}
.webpagecontent {
  padding-top: 3rem;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .card {
    width: 100%;
    display: flex;
    margin-bottom: 5rem;
    .card-imgbox {
      width: 50%;
      padding: 5%;
      position: relative;
      transition: transfrom 0.3s ease;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }
      .opacity_div {
        position: absolute;
        width: 50%;
        opacity: 0;
        height: 100%;
        z-index: 2;
      }
      &:hover > img {
        transform: scale(1.1);
      }
    }
    .card-intrbox2 {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      .card-title2 {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 7rem;
        position: relative;
        margin-bottom: rem;
        display: block;
        z-index: 4;
        color: var(--box-color);
        &::before {
          position: absolute;
          bottom: -10%;
          content: "";
          width: 100%;
          height: 50%;
          transform-origin: 0 0;
          transform: scaleX(0);
          left: 5%;
          z-index: -1;
          background-image: linear-gradient(to left, #d9afd9 0%, #97d9e1 100%);
          animation: widthTo100 1.5s forwards;
        }
      }
      .card_type {
        display: flex;
        .card-smalltype {
          display: flex;
          flex-wrap: wrap;
          p {
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: bolder;
            color: var(--box-color);
            display: block;
            padding: 5px;
            padding-bottom: 1px;
            margin-right: 1rem;
          }
        }
      }
    }
  }
}
@keyframes widthTo100 {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
.animate {
  .card-title2 {
    &::before {
      animation: widthTo100 1.5s forwards;
    }
  }
}
@media only screen and (max-width: 1440px) {
  .webpagecontent {
    .card {
      .card-intrbox2 {
        .card-title2 {
          font-size: 3.5rem;
        }
      }
    }
  }
}
@media (min-width: 769px) and (max-width: 1023px) {
  .webpagecontent {
    .card {
      flex-wrap: wrap;
      .card-imgbox {
        width: 100%;
        .opacity_div {
          position: absolute;
          width: 100%;
          opacity: 0;
          height: 100%;
          z-index: 2;
        }
      }
      .card-intrbox2 {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5%;
        text-align: left;
        .card-title2 {
          font-size: 3rem;
          line-height: 6rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .webpagecontent {
    width: 100vw;
    .card {
      flex-wrap: wrap;
      .card-imgbox {
        width: 100%;
        padding: 0;
        .opacity_div {
          position: absolute;
          width: 100%;
          opacity: 0;
          height: 100%;
          z-index: 2;
        }
      }
      .card-intrbox2 {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5%;
        text-align: left;
        .card-title2 {
          font-size: 2rem;
          line-height: 4rem;
        }
        .card_type {
          .card-smalltype {
            p {
              font-size: 1rem;
              line-height: 1.5rem;
              display: block;
              padding: 3px;
              padding-bottom: 1px;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
