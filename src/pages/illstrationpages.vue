<template>
  <div class="Illstion_bg">
    <div class="IllstionType">
      <router-link to="/illstration/poster"
        ><img v-lazy="postertypeImg" alt="" />
        <div class="Illstion_Info">
          <h3>Poster</h3>
          <span>過去製作的各式校內平面海報</span>
        </div>
      </router-link>
    </div>
    <div class="IllstionType">
      <router-link to="/illstration/procreate"
        ><img v-lazy="painttypeImg" alt="" />
        <div class="Illstion_Info">
          <h3>Procreate</h3>
          <span>過去製作的各式電繪作品</span>
        </div></router-link
      >
    </div>
    <div class="IllstionType">
      <router-link to="/illstration/Logo&Icon"
        ><img v-lazy="postertypeImg" alt="" />
        <div class="Illstion_Info">
          <h3>Logo/Icon</h3>
          <span>過去製作的各種Logo圖標，以及Icon</span>
        </div></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logotypeImg: "./images/logotype.png",
      painttypeImg: "./images/painttype.png",
      postertypeImg: "./images/postertype.png",
    };
  },
};
</script>
<style scoped>
.Illstion_bg {
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  background-color: var(--fortiary-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .IllstionType {
    width: 400px;
    height: 600px;
    position: relative;
    margin-right: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px 50px 50px 0;
    }
    .Illstion_Info {
      position: absolute;
      width: 100%;
      color: var(--secondary-color);
      height: 40%;
      overflow: hidden;
      bottom: 0;
      padding: 5px;
      padding-top: 40%;
      h3 {
        margin-bottom: 2rem;
      }
      span {
        font-size: 1.5rem;
      }
    }
  }
}
@media only screen and (max-width: 1440px) {
  .Illstion_bg {
    .IllstionType {
      margin-right: 1rem;
    }
  }
}
@media (min-width: 769px) and (max-width: 1280px) {
  .Illstion_bg {
    .IllstionType {
      height: 400px;
      margin-bottom: 1rem;
      .Illstion_Info {
        position: absolute;
        width: auto;
        color: var(--secondary-color);
        height: auto;
        background-color: var(--box-color);
        bottom: 0;
        left: -5%;
        z-index: 5;
        padding: 0;
        h3 {
          margin-bottom: 0;
          line-height: 4rem;
          padding: 0 1rem;
        }
        span {
          display: none;
        }
      }
    }
  }
}
@media only screen and (min-width: 769px) {
  .Illstion_bg {
    .IllstionType {
      &:hover {
        width: 500px;
        img {
          /* filter: grayscale(-10%); */
        }
        .Illstion_Info {
          height: 60%;
          color: var(--primary-color);
          background-image: linear-gradient(
            to top,
            var(--secondary-color) 20%,
            transparent 100%
          );
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .Illstion_bg {
    padding-top: 3rem;
    .IllstionType {
      width: 90vw;
      height: 90vw;
      margin: 0 auto;
      margin-bottom: 1rem;

      .Illstion_Info {
        position: absolute;
        width: auto;
        color: var(--secondary-color);
        height: auto;
        background-color: var(--box-color);
        bottom: 0;
        left: 0;
        z-index: 5;
        padding: 0;
        h3 {
          margin-bottom: 0;
          line-height: 4rem;
          padding: 0 1rem;
        }
        span {
          display: none;
        }
      }
    }
  }
}
</style>
