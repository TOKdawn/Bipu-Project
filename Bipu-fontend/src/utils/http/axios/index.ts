// 一杯茶一包烟,一个功能写一天

import type { AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';  //请求及返回值类型
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'; //请求预处理
import { RequestEnum, ResultEnum, ContentTypeEnum } from '@/enums/httpEnum'; //请求相关枚举
import { VAxios } from './Axios';
import { checkStatus } from './checkStatus';

import { useMessage } from '@/hooks/useMessage'; //通知模块
import { useGlobSetting } from '@/hooks/setting';

import { isString } from '@/utils/is';
import { errorResult } from './const';

import { createNow, formatRequestDate } from './helper';
import { setObjToUrlParams, deepMerge } from '@/utils';
const { createMessage } = useMessage();
const globSetting = useGlobSetting();
const transform: AxiosTransform = {
    //请求数据处理
    transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
        const { isTransformRequestResult } = options;

        if(!isTransformRequestResult) { //不进行预处理
            return res.data;
        }

        const { data } = res;
        if(!data) { //返回值为空
            return errorResult ;
        }

        const { success, result, message } = data;

        const hasSuccess = data && Reflect.has(data,'result') && success === ResultEnum.SUCCESS;

        if(!hasSuccess) { // 接口返回错误
            if(message) {
                if(Reflect.has(options, 'showErrorMessage') && options.showErrorMessage){ //判断请求参数是否允许显示错误信息
                    createMessage.error(message);
                }
            }
            Promise.reject(new Error(message));
            return errorResult;
        }else{
            return result;
        }
       
    },

    //请求前处理cinfig
    beforeRequestHook: (config, options) =>{
        const { apiUrl, joinParamsToUrl, formatDate, joinTime = true } = options;
        if (apiUrl && isString(apiUrl)) {
            config.url = `${apiUrl}${config.url}`;
        }
        const params = config.params || {};
        if (config.method?.toUpperCase() === RequestEnum.GET) {
          if (!isString(params)) {
            // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
            config.params = Object.assign(params || {}, createNow(joinTime, false));
          } else {
            // 兼容restful风格
            config.url = config.url + params + `${createNow(joinTime, true)}`;
            config.params = undefined;
          }
        } else {
          if (!isString(params)) {
            formatDate && formatRequestDate(params);
            config.data = params;
            config.params = undefined;
            if (joinParamsToUrl) {
              config.url = setObjToUrlParams(config.url as string, config.data);
            }
          } else {
            // 兼容restful风格
            config.url = config.url + params;
            config.params = undefined;
          }
        }

        return config
    },
/**
   * @description: 响应错误处理
   */
    responseInterceptorsCatch: (error: any) => {
        // const errorLogStore = useErrorLogStoreWithOut();
        // errorLogStore.addAjaxErrorInfo(error); //存入本地log
        const { response, code, message } = error || {};
        const msg: string = response?.data?.error?.message ?? '';
        const err: string = error?.toString?.() ?? '';
        try {
        if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
            createMessage.error('请求超时');
        }
        if (err?.includes('Network Error')) {
            createMessage.error('网络错误');
        }
        } catch (error) {
        throw new Error(error);
        }
        checkStatus(error?.response?.status, msg);
        return Promise.reject(error);
    }   
};
function createAxios(opt?: Partial<CreateAxiosOptions>) {
    return new VAxios(
      deepMerge(
        {
          timeout: 10 * 1000,
          // 基础接口地址
          // baseURL: globSetting.apiUrl,
          // 接口可能会有通用的地址部分，可以统一抽取出来
        //   prefixUrl: prefix,
          headers: { 'Content-Type': ContentTypeEnum.JSON },
          // 如果是form-data格式
          // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
          // 数据处理方式
          transform,
          // 配置项，下面的选项都可以在独立的接口请求中覆盖
          requestOptions: {
            // 默认将prefix 添加到url
            joinPrefix: true,
            // 需要对返回数据进行处理
            isTransformRequestResult: true,
            // post请求的时候添加参数到url
            joinParamsToUrl: false,
            // 格式化提交参数时间
            formatDate: true,
            // 消息提示类型
            errorMessageMode: 'message',
            // 接口地址
            apiUrl: globSetting.apiUrl,
            //  是否加入时间戳
            joinTime: true,
            // 忽略重复请求
            ignoreCancelToken: true,
          },
        },
        opt || {}
      )
    );
  }
export const defHttp = createAxios();