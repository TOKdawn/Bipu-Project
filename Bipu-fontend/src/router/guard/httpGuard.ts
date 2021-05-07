import type { Router } from 'vue-router';
import { AxiosCanceler } from '/@/utils/http/axios/axiosCancel';
import projectSetting from '/@/settings/projectSetting';

//页面切换时去除所有未完成的http请求

 export function createHttpGuard(router: Router) {
    const { removeAllHttpPending } = projectSetting;
    let axiosCanceler: Nullable<AxiosCanceler>;
    if (removeAllHttpPending) {
      axiosCanceler = new AxiosCanceler();
    }
    router.beforeEach(async () => {
      // Switching the route will delete the previous request
      axiosCanceler?.removeAllPending();
      return true;
    });
  }
  