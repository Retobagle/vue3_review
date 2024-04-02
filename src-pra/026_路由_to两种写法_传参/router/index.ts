// 创建一个路由器并且暴露出去

// 引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router';
// 引入路由组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiangqing',
          path:'detail/:id/:title/:content?',
          component:Detail
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
  ]
})
export default router;
