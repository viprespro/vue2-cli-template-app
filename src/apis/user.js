import { request } from '@/utils/client'

export const doLogin = (data) => {
  return request({
    data,
    method: 'POST',
    url: '/v1/pub/login',
  })
}
