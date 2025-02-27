import { request } from '@/utils/http.js'
export const login = (data) => {
  return request({ method: 'post', url: '/ucenter/login/accountLogin', data })
}
export const loginOut = (params) => {
  return request({ method: 'get', url: '/ucenter/login/logout', params })
}