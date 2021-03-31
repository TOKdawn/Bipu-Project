import request from '/@/utils/request'
let systemXHR = {};
systemXHR.login = function(data) {
    return request({
        url: '/api/fin-services/v1/system-info/login',
        method: 'post',
        data
    })
}

export default systemXHR