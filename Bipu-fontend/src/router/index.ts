import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes, LoginRoute } from './routes'; //引入路由模块
import { REDIRECT_NAME } from './constant'; //超时重定向

// // vue2中使用 mode: history 实现
// const routerHistory = createWebHistory();
const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME];

const router = createRouter({ //创建路由对象
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes:(basicRoutes as unknown) as RouteRecordRaw[],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }) //页面滚动位置
})


// config router
export function setupRouter(app: App<Element>) {
    app.use(router);
}
  
export default router