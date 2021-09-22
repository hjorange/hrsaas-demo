// 存到到本地的一个Cookies库
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
