import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router'
import {createPinia} from 'pinia'
import {emitter} from './utils/emitter'

// 创建应用
const app = createApp(App)
const pinia = createPinia()
// 安装路由器
app.use(router)
app.use(pinia)
// 挂载应用
app.mount('#app')