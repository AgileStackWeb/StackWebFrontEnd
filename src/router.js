import { createRouter, createWebHistory } from "vue-router";
import Start from "./pages/StartPage.vue";
import Main from "./pages/MainPage.vue";
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  // 在這裡添加其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
