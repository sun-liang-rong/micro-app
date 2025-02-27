// src/utils/request.js  
import axios from 'axios'
import { ElMessage } from 'element-plus'
 
// 创建实例 
const service = axios.create({ 
  baseURL: '/api', 
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
 
// 请求拦截器
service.interceptors.request.use( 
  config => {
    // 携带 token 逻辑 
    const token = localStorage.getItem('token') 
    if (token) {
      config.headers.Authorization  = `Bearer ${token}`
    }
    return config 
  },
  error => {
    return Promise.reject(error) 
  }
)
 
// 响应拦截器
service.interceptors.response.use( 
  response => {
    const res = response.data  
    // 与后端约定的状态码逻辑 
    if (res.code  !== 200) {
      ElMessage.error(res.message  || '请求异常')
      return Promise.reject(new  Error(res.message)) 
    }
    return res 
  },
  error => {
    // HTTP 状态码处理 
    if (error.response?.status  === 401) {
      localStorage.removeItem('token') 
      window.location.href  = '/login'
    }
    ElMessage.error(error.message  || '服务异常')
    return Promise.reject(error) 
  }
)
 
// 封装通用请求方法 
export function request(options) {
  return service(options)
}
 
// // 快捷方法封装 
// export function get(url, params) {
//   return request({ method: 'get', url, params })
// }
 
// export function post(url, data) {
//   return request({ method: 'post', url, data })
// }
 
// 可扩展 put、delete 等方法 