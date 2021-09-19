import axios from 'axios'

// 创建axios实例
const service = axios.create(
  // 利用.env.development和.env.production里面的VUE_APP_BASE_API来进行不同环境不同地址
  // process.env相当于开发环境，然后调用使用即可
  {
    baseURL: process.env.VUE_APP_BASE_API
  }
)

// 请求拦截器
service.interceptors.request.use(

)

// 响应拦截器
service.interceptors.response.use(

)

export default service
