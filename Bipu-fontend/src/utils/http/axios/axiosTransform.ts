// XHR 数据的预处理
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';


export interface CreateAxiosOptions extends AxiosRequestConfig {  //设置Axios 参数
    prefixUrl?: string;
    transform?: AxiosTransform;
    requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
    /**
     * @description: Process configuration before request
     */
    beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig; //请求体预处理
  
    /**
     * @description: Request successfully processed
     */
    transformRequestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any; //返回值预处理
  
    /**
     * @description: 请求失败处理
     */
    requestCatchHook?: (e: Error) => Promise<any>; 
  
    /**
     * @description: 请求之前的拦截器
     */
    requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  
    /**
     * @description: 请求之后的拦截器
     */
    responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;
  
    /**
     * @description: 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch?: (error: Error) => void;
  
    /**
     * @description: 请求之后的拦截器错误处理
     */
    responseInterceptorsCatch?: (error: Error) => void;
  }
  