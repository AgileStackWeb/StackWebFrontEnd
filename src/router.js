import { createRouter, createWebHistory } from "vue-router";
import Start from "./pages/StartPage.vue";
import Home from "./pages/Home.vue";
import StartTrain from "./pages/StartTrainPage.vue";
import ModelList from "./pages/ModelListPage.vue";
import Predict from "./pages/Predict.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/starttrain",
    name: "StartTrain",
    component: StartTrain,
  },
  {
    path: "/modellist",
    name: "ModelList",
    component: ModelList,
  },
  {
    path: "/predict",
    name: "Predict",
    component: Predict,
  },
  // 在這裡添加其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
