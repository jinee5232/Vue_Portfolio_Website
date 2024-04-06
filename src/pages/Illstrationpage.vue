<template>
  <div class="Illstion_bg">
    <div class="productBox">
      <div class="product" v-for="(item, index) in ItemData" :key="index">
        <img :src="item.img" alt="" />
        <div class="MaskInfo">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],
  data() {
    return {
      ItemData: [],
    };
  },
  mounted() {
    // this.fetchData();
    this.fetchPortfolioData();
  },
  methods: {
    fetchPortfolioData() {
      const routeType = this.type;
      console.log(routeType);
      fetch("/portfolio2.json")
        .then((response) => response.json())
        .then((data) => {
          const paintingData = data.find((item) => item.Bigtype === "繪畫");
          if (paintingData) {
            const dataa = paintingData.Content;
            const paintingData2 = dataa.find(
              (item2) => item2.Sectype === routeType
            );
            this.ItemData = paintingData2.Paint;
            console.log(this.ItemData);
          }
        })
        .catch((error) => {
          console.error("Error fetching web data:", error);
        });
    },
    fetchData() {
      // 根据路由参数加载对应的JSON数据
      const routeType = this.type;
      // 发送请求获取数据
      // 这里假设使用axios发送请求
      fetch;
      axios
        .get(`/api/${routeType}`)
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
<style scoped>
.Illstion_bg {
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  padding: 2rem 5rem;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  .productBox {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: start;
    width: auto;
    .product {
      border-radius: 20px;
      position: relative;
      width: 400px;
      height: 400px;
      margin: 2rem auto;
      overflow: hidden;
      img {
        height: 100%;
        object-fit: contain;
        display: block;
        margin: auto;
      }
      .MaskInfo {
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        align-items: end;
        opacity: 0;
        padding: 1rem;
        margin: auto;
        height: 100%;
        color: var(--primary-color);
        font-size: 2rem;
        font-weight: bolder;
        z-index: 2;
        background-image: linear-gradient(
          to top,
          var(--background-color) 0%,
          transparent 100%
        );
      }
      &:hover {
        .MaskInfo {
          opacity: 1;
        }
      }
    }
  }
}

@media only screen and (max-width: 1440px) {
  .Illstion_bg {
    padding: 2rem;
  }
}
/* 手機尺寸（小於等於 767px） */
@media only screen and (max-width: 768px) {
  .Illstion_bg {
    .productBox {
      .product {
        width: 90vw;
        height: 90vw;
      }
    }
  }
}
/* 平板電腦尺寸（768px 到 1023px） */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* 樣式內容 */
}
/* 筆記型電腦尺寸（1024px 到 1279px） */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  /* 樣式內容 */
}
/* 桌上型電腦及以上尺寸（1280px 及以上） */
@media only screen and (min-width: 1280px) {
  /* 樣式內容 */
}
</style>
