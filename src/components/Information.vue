<template lang="">
  <div class="personal_Info">
    <div class="Info_sidebar">
      <div class="Info_head">
        <img v-lazy="'./images/head.png'" alt="" />
      </div>
      <div class="Info_link">
        <a href="https://www.instagram.com/deng_j.y/" target="_blank">
          <Instagram class="Svg_link" />
        </a>
        <a href="https://codepen.io/Deng-J-Y" target="_blank">
          <Codepen class="Svg_link" />
        </a>
        <a href="https://github.com/jinee5232" target="_blank">
          <Github class="Svg_link" />
        </a>
      </div>
      <div class="Info_Contact">
        <h4><span>Email：</span>jinee5232@gmail.com</h4>
        <h4><span>Phone：</span>0937681206</h4>
      </div>
    </div>

    <div class="Info_Content">
      <button class="InfoBtn" @click="showchange">
        <img v-lazy="arrowsvg" alt="" />
      </button>
      <div v-if="Infochange === 0" class="Info_box">
        <div class="contentBox">
          <h2>Jing-Yi Deng</h2>
          <h4>鄧敬議 | 網頁設計師、前端工程師</h4>
          <p>
            美是一種無法言喻的力量，它融入生活的方方面面，如同一幅繽紛的畫作，讓世界變得更加璀璨。對我而言，繪製不僅是一種創作的方式，更是一種與美相遇的契機。當程式碼與美的元素相互交織時，我感受到一種奇妙的共鳴，這種結合帶來的滿足感令人難以言喻。在追求程式工程學系碩士學位的過程中，我發現了將程式與美學結合的樂趣，尤其是當我完成一段程式碼後，能夠將其美化、包裝成一個精美的作品。雖然曾擔任測試工程師，但我始終渴望融合設計與技術的工作，這也是我對網頁前端製作的嚮往所在。在這個領域中，我看到了無限的可能性，期待著將我的創意與技能融入其中，創造出令人驚艷的作品，為用戶帶來美的體驗。
          </p>
        </div>
      </div>
      <div v-if="Infochange === 1" class="Info_box">
        <div class="contentBox">
          <div class="educational">
            <h3>學歷</h3>
            <div class="educationalBox">
              <h4>國立宜蘭大學 資訊工程所 碩士</h4>
              <h4>2019/7 ~ 2021/7</h4>
            </div>
            <div class="educationalBox">
              <h4>國立宜蘭大學 資訊工程學系 學士</h4>
              <h4>2014/9 ~ 2018/6</h4>
            </div>
          </div>
          <div class="educational">
            <h3>職訓</h3>
            <div class="educationalBox">
              <h4>健行科技大學推廣教育中心 網頁前端實戰班</h4>
              <h4>2023/8~ 2023/11</h4>
            </div>
          </div>
        </div>
      </div>
      <div v-if="Infochange === 2" class="Info_box">
        <div class="contentBox">
          <h3>工作</h3>
          <div class="WorkBox">
            <div>
              <h4>英業達股份有限公司</h4>
              <p>硬體測試工程師</p>
            </div>
            <h4>2022/8 ~ 2023/2</h4>
          </div>
          <div class="WorkBox">
            <div>
              <h4>英業達股份有限公司</h4>
              <p>軟體測試工程師</p>
            </div>
            <h4>2021/9 ~ 2022/4</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Instagram from "../assets/icons/inst.svg?component";
import Codepen from "../assets/icons/code.svg?component";
import Github from "../assets/icons/git.svg?component";
export default {
  data() {
    return {
      InfoShow: "first",
      Infochange: 0,
      headImage: "./images/head.png",
      arrowsvg: "./right-arrow.svg",
    };
  },
  components: {
    Instagram,
    Codepen,
    Github,
  },
  methods: {
    showInfo(data) {
      this.InfoShow = data;
    },
    showchange() {
      if (this.Infochange < 2) {
        this.Infochange += 1;
      } else {
        this.Infochange = 0;
      }
    },
  },
};
</script>
<style scoped>
.personal_Info {
  overflow: hidden;
  box-sizing: border-box;
  background-color: var(--fortiary-color);
  width: 100vw;
  display: flex;
  height: calc(100vh - 90px);
  padding: 3rem 10%;
  padding-bottom: 0;
  justify-content: space-between;
  .InfoBtn {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: var(--secondary-color);
    border: none;
    content: "";
    position: absolute;
    z-index: 5;
    right: 50px;
    top: 50px;
  }

  .Info_sidebar {
    width: 30%;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .Info_link {
      width: 20%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      .Svg_link {
        width: 50px;
        height: 50px;
        fill: var(--primary-color);
        filter: drop-shadow(0 0 0.75rem var(--box-color));
        transition: all 0.1s ease;
        &:hover {
          fill: var(--background-color);
          transform: scale(1.1);
          filter: drop-shadow(0 0 0.75rem var(--primary-color));
        }
      }
    }
    .Info_head {
      width: 70%;
      margin-bottom: 2rem;
      img {
        width: 90%;
        display: block;
        object-fit: contain;
        margin: 0 auto;
        border-radius: 150px 150px 10px 150px;
        background-color: var(--primary-color);
      }
    }
    .Info_Contact {
      width: 100%;
    }
  }
  .Info_Content {
    width: calc(80% - 50px);
    display: flex;
    justify-content: start;
    position: relative;
    padding: 2rem;
    margin-top: 5%;
    .contentBox {
      animation: downToup 1s forwards;
    }

    .educational {
      height: 40%;
      margin-bottom: 3rem;
    }
    .educationalBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      animation: downToup 0.5s forwards;
    }
    .Info_box {
      width: 100%;
      height: 100%;
      .WorkBox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        h4 {
          margin-bottom: 0;
          font-weight: bolder;
        }
      }
      h2,
      h3 {
        color: var(--secondary-color);
      }
      h2,
      h4 {
        margin-bottom: 1rem;
      }
      h3 {
        margin-bottom: 2rem;
        position: relative;
        &::before {
          position: absolute;
          width: 100%;
          height: 3px;
          content: "";
          bottom: -1rem;
          background-color: var(--background-color);
        }
      }
      p {
        font-size: 1.2rem;
        line-height: 3rem;
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
    transform: translateY(0%);
    opacity: 1;
  }
}
@media only screen and (max-width: 768px) {
  .personal_Info {
    width: 100vw;
    height: auto;
    flex-direction: column;
    padding: 5rem 1rem;
    overflow: auto;
    .Info_sidebar {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 2rem;
      .Info_link {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        text-align: center;
        justify-content: space-around;
        margin-bottom: 1rem;
      }
      .Info_head {
        width: 50%;
        img {
          width: 100%;
          display: block;
          object-fit: contain;
          margin: 0 auto;
          border-radius: 150px 150px 10px 150px;
          background-color: var(--primary-color);
        }
      }
      .Info_Contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        span {
          display: none;
        }
      }
    }
    .Info_Content {
      width: 100%;
      display: flex;
      justify-content: start;
      position: relative;
      padding: 0rem;
      margin-top: 5%;
      .InfoBtn {
        width: 50px;
        height: 50px;
        right: 10px;
        top: 0px;
      }
      .contentBox {
        min-height: 600px;
      }
      .Info_box {
        p {
          font-size: 1rem;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
