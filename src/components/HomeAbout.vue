<template>
  <div class="About_bg">
    <div class="About_content">
      <div class="contentA">
        <span>這個網頁美編作品集展示了我 「鄧敬議」過往的作品</span>
        <span>透過精心設計的介面和優秀的排版，展現我的設計理念和美學；</span>
        <span>每個作品都展現了他對設計細節的關注和創意的運用，</span>
        <span>透過觀察思考設計去完成每一樣作品。</span>
        <span>透過這個網站，</span>
        <span
          >可以深入了解鄧敬議的設計熱誠和技術，以及在設計領域的經驗和作品。</span
        >
      </div>
      <div class="contentB">
        <span
          >這個網頁美編作品集展示了我
          「鄧敬議」過往的作品，透過精心設計的介面和優秀的排版，展現我的設計理念和美學；每個作品都展現了他對設計細節的關注和創意的運用，透過觀察思考設計去完成每一樣作品。</span
        >
        <span
          >透過這個網站，可以深入了解鄧敬議的設計熱誠和技術，以及在設計領域的經驗和作品。</span
        >
      </div>
    </div>
    <button class="homeAbout_btn">看更多</button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.About_bg {
  padding: 2rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  marfin-right: auto;
}
.About_content {
  color: var(--primary-color);
  margin: 3rem 0;
  font-weight: bolder;
  .contentB {
    display: none;
  }
  span {
    display: block;
    font-size: 2rem;
    line-height: 4rem;
  }
}
.homeAbout_btn {
  display: none;
  margin-left: auto;
  width: 200px;
  color: var(--primary-color);
  height: 50px;
  font-size: 2rem;
  line-height: 3rem;
  border: none;
  border-radius: 20px;
  background-color: var(--secondary-color);
  &:hover {
    background-color: var(--tertiary-color);
  }
}
@media only screen and (max-width: 768px) {
  .About_bg {
    width: 100vw;
    .About_content {
      margin: 2rem 0;
      .contentA {
        display: none;
      }
      .contentB {
        display: block;
      }
      span {
        display: inline-block; /* 将 <span> 元素表现为块级元素 */
        white-space: pre-wrap;
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }
}
/* 平板電腦尺寸（768px 到 1023px） */
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .About_bg {
    width: 90vw;
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
