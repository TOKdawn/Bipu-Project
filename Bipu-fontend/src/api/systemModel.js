import request from '/@/utils/request'
let XHRList = {
};
const systemXHR = new Proxy(XHRList,{ //拦截未定义的URL请求
    get(target, prop) {
        if (prop in target) {
            return target[prop]
        }
        throw new Error(`${prop} is error XHR request`);
    }
})
XHRList.login = function(data) {
    return request({
        url: '/api/fin-services/v1/system-info/login',
        method: 'post',
        data
    })
}

export default systemXHR