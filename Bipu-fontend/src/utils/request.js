import axios from 'axios'

//axios 实例
let baseUrl

if (process.env.NODE_ENV === 'development') {
    baseUrl = '/api'
  } else {
    baseUrl = ''
  }
  
const service = axios.create({
    baseURL,
    timeout:1000000,// 超时时间
})

export default service