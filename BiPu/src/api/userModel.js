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
XHRList.getUserInfo = function(uid) {
    if(!uid){
        throw new Error(`XHR: getUserInfo no Passing Reference `);
    }
    return request({
        url: '/user/'+uid,
        method: 'get',
    })
}
XHRList.logout = function() {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}
XHRList.changePhone = function(data) {
    if(!data){
        throw new Error(`XHR: ChangePhone no Passing Reference `);
    }
    return request({
        url: '/user/changephone',
        method: 'post',
        data
    })
}
export default systemXHR