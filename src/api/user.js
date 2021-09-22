import request from '@/utils/request'

/**
 * 登录请求
 * @param {*} data
 * @returns
 */
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 *
 * @returns 获取用户信息
 */
export function getInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {

}
