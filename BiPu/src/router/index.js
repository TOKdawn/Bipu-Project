import { createRouter, createWebHistory } from 'vue-router'
const routeMap = require('./routers') //引入路由表
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();


const router = createRouter({ //创建路由对象
    history: routerHistory,
    routes:routeMap
})

export default router