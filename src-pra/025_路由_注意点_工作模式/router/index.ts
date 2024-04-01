// 创建一个路由器并且暴露出去

// 引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';
// 引入路由组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 创建路由器
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    },
  ]
})
export default router;
