import { createRouter, createWebHistory } from "vue-router";
import Start from "./pages/StartPage.vue";
import Main from "./pages/SecondPage.vue";
import Home from "./pages/Home.vue";
import StartTrain from "./pages/StartTrainPage.vue";
import ModelList from "./pages/ModelListPage.vue";
import Backtest from "./pages/BacktestPage.vue";
import Predict from "./pages/Predict.vue";

import Test from "./pages/Test.vue";

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
    path: "/backtest",
    name: "Backtest",
    component: Backtest,
  },
  {
    path: "/predict",
    name: "Predict",
    component: Predict,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  // 在這裡添加其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
