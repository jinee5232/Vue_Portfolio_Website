<template lang="">
  <div>
    <loading :active="isLoading"></loading>
    <div class="Home-bg">
      <Banner />
      <div class="homeBlock">
        <About />
      </div>
      <div class="homeBlock">
        <Website />
      </div>
      <Painter />
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner.vue";
import About from "../components/HomeAbout.vue";
import Website from "../components/HomeWeb.vue";
import Painter from "../components/HomePainter.vue";
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    Banner,
    About,
    Website,
    Painter,
  },
};
</script>
<style>
.Home-bg {
  margin-top: 90px;
  .homeBlock {
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
