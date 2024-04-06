import HomePage from "./pages/Homepage.vue";
import Aboutpage from "./pages/About.vue";
import Websitepage from "./pages/Websitepage.vue";
import Illstrpage from "./pages/illstrationpages.vue";
import Illustration from "./pages/Illstrationpage.vue";

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/About",
    name: "Aboutpage",
    component: Aboutpage,
    meta: { hideFooter: true }, // 在这里添加 meta 信息
  },
  {
    path: "/Website",
    name: "Websitepage",
    component: Websitepage,
  },
  {
    path: "/Illstrations",
    name: "Illstrpage",
    component: Illstrpage,
    meta: { hideFooter: true },
  },
  {
    path: "/illstration/:type",
    name: "illustration",
    component: Illustration,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
