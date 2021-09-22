import axios from 'axios'
// 引入提示消息
import { Message } from 'element-ui'
// 引入store
import store from '@/store'

// 创建axios实例
const service = axios.create(
  // 利用.env.development和.env.production里面的VUE_APP_BASE_API来进行不同环境不同地址
  // process.env相当于开发环境，然后调用使用即可
  {
    baseURL: process.env.VUE_APP_BASE_API
  }
)

// 请求拦截器
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers.Authorization = 'Bearer ' + store.getters.token
  }
  return config
})

// 响应拦截器
service.interceptors.response.use(({ data }) => {
  const { data: res, success, message } = data
  // 发送请求成功，解构出去
  if (success) return res
  // 发送请求成功，但有错误，不是真正的成功，比如账号密码错误
  // 给错误提示
  Message.error(message)
  // 调用Promise.reject，不调用的话发送请求后代码还会往下面走,因为Promise返回一个对象，所以new一个
  return Promise.reject(new Error(message))
},
// 响应拦截器失败后
error => {
  // 统一加失败请求，catch可以删掉，报错但不影响
  Message.error(error.message)
  // 调用Promise.reject，不调用的话发送请求后代码还会往下面走
  return Promise.reject(error)
})

export default service
