<template>
  <div class="header">
    <img class="headerLogo" src="/Logo.svg" alt="Logo" />
    <nav>
      <ul v-if="mobileWidth === false">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/About"> About </router-link>
        </li>
        <li><router-link to="/Website">Website</router-link></li>
        <li><router-link to="/Illstrations">Illstration</router-link></li>
      </ul>
      <div
        id="hamburgerBox"
        :class="{ open: hamOpen }"
        @click="hamOpen = !hamOpen"
        v-if="mobileWidth"
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
    <div v-if="hamOpen" class="hameSidebar">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/About"> About </router-link>
        </li>
        <li><router-link to="/Website">Website</router-link></li>
        <li><router-link to="/Illstrations">Illstration</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hamOpen: false,
      mobileWidth: false,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // 获取视口宽度
      const windowWidth = window.innerWidth;
      // 假设在小于 768px 的视口宽度下将 open 设置为 false
      if (windowWidth <= 768) {
        this.mobileWidth = true;
      } else {
        this.mobileWidth = false;
        this.hamOpen = false;
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  transition: all 0.5s ease-out;
}
.header {
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  z-index: 30;
  background-color: var(--background-color);
  left: 0;
  top: 0;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  .headerLogo {
    padding: 30px;
  }
  nav {
    display: flex;
    align-items: center;

    ul {
      list-style-type: none;
      display: flex;
      li {
        line-height: 90px;
        font-size: 32px;
        margin-right: 2rem;
        color: var(--primary-color);
        &:hover {
          color: var(--accent-color);
        }
        a {
          color: var(--primary-color);
          &:hover {
            color: var(--accent-color);
          }
        }
      }
    }
  }
  #hamburgerBox {
    overflow: hidden;
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    position: relative;
    cursor: pointer;
    span {
      width: 100%;
      border-radius: 3px;
      height: 6px;
      background-color: var(--primary-color);
      position: absolute;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
    span:nth-child(1) {
      top: 0px;
    }
    span:nth-child(2) {
      top: 18px;
    }
    span:nth-child(3) {
      top: 36px;
    }
    &.open span:nth-child(1) {
      top: 18px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }
    &.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }
    &.open span:nth-child(3) {
      top: 18px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
    &:hover > .hamburger {
      opacity: 0;
      &::after {
        transform: rotate(45deg) scaleX(1.2);
        top: 0;
      }
      &::before {
        transform: rotate(-45deg) scaleX(1.2);
        bottom: 0;
        /* transform: scaleX(1.5); */
      }
    }
  }
  .hameSidebar {
    position: fixed;
    top: 100px;
    right: 0;
    width: 300px;
    height: calc(100vh - 100px);
    background-color: var(--primary-color);
    text-align: center;
    z-index: 50;
    animation: rightIn 0.3s forwards;
    ul {
      list-style-type: none;

      li {
        line-height: 90px;
        display: block;
        font-size: 32px;
        margin-right: 2rem;
        color: var(--box-color);
        &:hover {
          color: var(--accent-color);
        }
        a {
          color: var(--box-color);
          &:hover {
            color: var(--accent-color);
          }
        }
      }
    }
  }
}
@keyframes rightIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* 手機尺寸（小於等於 767px） */
@media only screen and (max-width: 767px) {
  .header {
    padding: 0 1rem;
    .headerLogo {
      padding: 30px 0px;
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
