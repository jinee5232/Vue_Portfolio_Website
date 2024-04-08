<template>
  <div class="footer">
    <p>&copy; 2024 Deng-JY</p>
    <div>
      <span class="aboutBtn" @click="OpenInfo">About.</span>
    </div>
  </div>
  <div v-if="PInfoOpen"><PInfo /></div>
</template>
<script>
import PInfo from "../components/Information.vue";
export default {
  data() {
    return {
      PInfoOpen: false,
    };
  },
  components: {
    PInfo,
  },
  methods: {
    OpenInfo() {
      this.PInfoOpen = true;
    },
  },
};
</script>
<style scoped>
.footer {
  width: 100vw;
  height: 180px;
  display: flex;
  letter-spacing: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 20%;
  background-color: var(--box-color);
  color: var(--primary-color);

  .aboutBtn {
    font-size: 5rem;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      height: 5px;
      width: 200px;
      top: 50%;
      left: -60%;
      transform: scaleX(0.5);
      background-color: var(--primary-color);
      transition: transform 1s ease;
      transform-origin: 0 0;
    }
    &::before {
      content: "";
      position: absolute;
      height: 5px;
      width: 30px;
      top: 25%;
      left: -30%;
      transform: rotate(45deg);
      z-index: 10;
      background-color: var(--accent-color);
      transition: all 1s ease;
      transform-origin: 0 0;
      opacity: 0;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.5);
      &::after {
        transform: scaleX(3);
        z-index: 5;
        background-color: var(--accent-color);
      }
      &::before {
        opacity: 1;
        left: 161%;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding: 1rem 2rem;
    align-items: flex-start;
    .aboutBtn {
      font-size: 3rem;
      position: relative;
      cursor: pointer;
      line-height: 90px;
      transition: none;
      &::after {
        display: none;
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>
