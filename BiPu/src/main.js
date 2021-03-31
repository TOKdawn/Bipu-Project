import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './index.css'
//创建Vue实例
const app = createApp(App)



app.use(router) //使用vueRouter
app.use(ElementPlus)
app.mount('#app')//挂载到Dom上
