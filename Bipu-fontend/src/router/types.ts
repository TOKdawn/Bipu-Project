import type { RouteRecordRaw } from 'vue-router';  // 作为类型引用.不可做值调用,仅仅导入被用于类型注解或声明的声明语句，它总是会被完全删除，因此在运行时将不会留下任何代码。详见 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
import { RoleEnum } from '@/enums/roleEnum';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =   //vue组件类型
| ReturnType<typeof defineComponent> 
| (() => Promise<typeof import('*.vue')>) 
| (() => Promise<T>);// 


export interface RouteMeta{ //路由参数接口
    title: string;
    ignoreAuth?: boolean; //是否忽略权限校验
    roles?: RoleEnum[]; //身份信息
    ignoreKeepAlive?: boolean; //是否缓存
    affix?: boolean; //是否显示在标签页菜单上
    icon?: string;
    transitionName?: string; //切换动画
    carryParam?: boolean;//是否路由传参
}

// @ts-ignore //去除ts检测,否则children类型为AppRouteRecordRaw[]检测不通过
// 完整的路由类型接口
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> { // ​Omit<T, K>​ 从对象类型T中剔除K属性，并创建一个新的对象类型
    name: string;
    meta: RouteMeta; //meta 信息
    component?: Component | string;
    components?: Component;// 命名视图组件
    children?: AppRouteRecordRaw[]; //子路由
    props?: Recordable; // 路由组件传递参数
    fullPath?: string;
}


export type AppRouteModule = AppRouteRecordRaw;