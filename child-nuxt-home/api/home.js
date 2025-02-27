import { request } from '@/utils/http.js'
export const home = (data) => {
  return request({ method: 'get', url: '/', data })
}