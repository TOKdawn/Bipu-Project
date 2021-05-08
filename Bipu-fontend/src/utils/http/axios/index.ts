// 一杯茶一包烟,一个功能写一天

import type { AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';  //请求及返回值类型
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'; //请求预处理
import { RequestEnum, ResultEnum, ContentTypeEnum } from '@/enums/httpEnum'; //请求相关枚举
import { VAxios } from './Axios';
import { checkStatus } from './checkStatus';

import { useMessage } from '@/hooks/useMessage'; //通知模块
