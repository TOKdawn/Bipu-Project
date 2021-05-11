import { defHttp } from '@/utils/http/axios';
import {
    changePhoneParams,
    GetUserInfoByUserIdParams,
    GetUserInfoByUserIdModel,
  } from './model/userModel';
  
import { ErrorMessageMode } from '@/utils/http/axios/types';
enum Api {
    logout = '/user/logout',
    getUserInfo = '/user/',
    changePhone = '/user/changephone',
}
export function logout() {
    return defHttp.get(
        {
        url: Api.logout
        }
    );
}
/**
 * @description: getUserInfoById
 */
export function getUserInfo(params: GetUserInfoByUserIdParams) {
    return defHttp.get<GetUserInfoByUserIdModel>({
        url: Api.getUserInfo + params,
    });
}

export function changePhone(params: changePhoneParams) {
    return defHttp.post({
        url: Api.changePhone ,
        params
    });
}