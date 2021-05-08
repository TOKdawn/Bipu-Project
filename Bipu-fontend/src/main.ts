import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { Elcomponents, Elplugins } from './ElementUI'
// import './index.css'
//创建Vue实例
const app = createApp(App)


// 按需导入Element Plus组件和插件
Elcomponents.forEach(component => {
    app.component(component.name, component)
  })
Elplugins.forEach(plugin => {
    app.use(plugin)
  })
  
app.use(router) //使用vueRouter
app.mount('#app')//挂载到Dom上
