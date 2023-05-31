
// 导入 Vue 和 Vue Router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入你的组件
import HomePage from './pages/HomePage.vue'
import StartTrainPage from './pages/StartTrainPage.Vue'

// 使用 Vue Router 插件
Vue.use(VueRouter)

// 定义你的路由
const routes = [
{ path: '/', component: HomePage },
{ path: '/starttrain', component: StartTrain },
]

// 创建路由实例
const router = new VueRouter({
    routes
})

// 导出路由实例
export default new VueRouter({
    routes: [
        {
          name: "HelloWorld", // 元件呈現的名稱
          path: "/Homepage", // 對應的虛擬路徑
          component: HomePage   // 對應的元件
        },
        {
          name: "Page",
          path: "/Page",
          component: Page
        }
    ],
  });

