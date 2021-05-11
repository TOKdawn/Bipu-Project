export interface GetUserInfoByUserIdParams {
    userId: string | number;
}
  
export interface GetUserInfoByUserIdModel {
    role: number;

    id: string | number;
    
    email: string;

    name: string;

    avatar: string;

    bilibili?: string;
    weibo?: string;
    fivesong?: string;
    tieba?: string;
    other?: string;
}
  
export interface LoginParams {
    username: string;
    password: string;
}
export interface changePhoneParams {
    phone: string;
    password:string;
}
