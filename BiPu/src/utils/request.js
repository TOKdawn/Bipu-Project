import axios from 'axios'

//axios 实例

const service = axios.create({
    baseURL:'/',
    timeout:1000000,// 超时时间
})

export default service