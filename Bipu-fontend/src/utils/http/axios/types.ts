export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
    joinParamsToUrl?: boolean;  // 请求链接是否传参
    apiUrl?: string;// Interface address, use the default apiUrl if you leave it blank
    errorMessageMode?: ErrorMessageMode; //错误信息
    joinTime?: boolean; //时间戳
    ignoreCancelToken?: boolean; //取消重复请求
}
export interface Result<T = any> {
    code: number;
    type: 'success' | 'error' | 'warning';
    message: string;
    result: T;
}
// multipart/form-data: upload file
export interface UploadFileParams {
    // Other parameters
    data?: Recordable;
    // File parameter interface field name
    name?: string;
    // file name
    file: File | Blob;
    // file name
    filename?: string;
    [key: string]: any;
}
  