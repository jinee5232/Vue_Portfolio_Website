<template>
  <header>
    <NavBar />
  </header>
  <router-view></router-view>
  <Footer v-if="!$route.meta.hideFooter" />
</template>

<script>
import "./assets/reset.css";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
    Footer,
  },
  setup() {
    const router = useRouter();
    const isLoading = ref(true);

    // 导航开始时显示 Loading 界面
    router.beforeEach(() => {
      isLoading.value = true;
    });

    // 导航结束后隐藏 Loading 界面
    router.afterEach(() => {
      isLoading.value = false;
    });

    return { isLoading };
  },
};
</script>
<style>
:root {
  --primary-color: #f5f5f5;
  --secondary-color: #5158bb;
  --tertiary-color: #748cab;
  --fortiary-color: #d4dae2;
  --accent-color: #c4f040;
  /* --accent-color: #ffc43f; */
  --box-color: #454545;
  --background-color: #111111;
  /* --primary-color: #fbe0c3;
  --secondary-color: #344648;
  --tertiary-color: #7d8e95;
  --accent-color: #ffbb98;
  --background-color: #31334e; */
}
a {
  text-decoration: none;
  outline: none;
}
* {
  box-sizing: border-box;
  transition: all 0.5s ease-out;
}
img {
  transition: all 0.2s ease-out;
}
body {
  background-color: var(--background-color);
  font-family: sans-serif;
  width: 100vw;
  overflow-x: hidden;
}
h1 {
  font-size: 15rem;
  font-family: sans-serif;
}
h2 {
  font-size: 5rem;
  font-family: sans-serif;
}
h3 {
  font-size: 4rem;
  font-family: sans-serif;
}
h4 {
  font-size: 1.5rem;
  font-family: sans-serif;
  line-height: 2.5rem;
}
p {
  font-size: 2rem;
  line-height: 4rem;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
    line-height: 3rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
/* 平板電腦尺寸（768px 到 1023px） */
@media only screen and (min-width: 769px) and (max-width: 1025px) {
  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 4rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  p {
    font-size: 1.8rem;
    line-height: 4rem;
  }
}
/* 筆記型電腦尺寸（1024px 到 1279px） */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 4rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  p {
    font-size: 2rem;
    line-height: 4rem;
  }
}
/* 桌上型電腦及以上尺寸（1280px 及以上） */
@media only screen and (min-width: 1280px) {
  /* 樣式內容 */
}
</style>
