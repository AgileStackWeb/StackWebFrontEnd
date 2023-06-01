import { createRouter, createWebHistory } from 'vue-router';
import Start from './pages/StartPage.vue';
import Main from './pages/MainPage.vue';
import App from './pages/App.vue';
import StartTrain from './pages/StartTrainPage.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },  
  {
    path: '/start',
    name: 'Start',
    component: Start
  },
  {
    path: '/starttrain',
    name: 'StartTrain',
    component: StartTrain
  },
  // 在這裡添加其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
