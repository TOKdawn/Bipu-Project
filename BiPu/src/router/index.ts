import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes, LoginRoute } from './routes'; //引入路由模块
import { REDIRECT_NAME } from './constant'; //超时重定向时间
const routeMap = require('./routers') //引入路由表
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();


const router = createRouter({ //创建路由对象
    history: routerHistory,
    routes:routeMap
})

export default router