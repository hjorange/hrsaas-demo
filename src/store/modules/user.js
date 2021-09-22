// 引入接口
import { login, getInfo } from '@/api/user.js'
import { setToken, getToken } from '@/utils/auth.js'
const state = {
  // 存token
  // 调用Cookies里的getToken
  token: getToken(),
  UserInfo: {}
}
const mutations = {
  // 给TOken赋值
  setToken(state, plyload) {
    // 给token赋值
    state.token = plyload
    // 调用Cookies里的setToken把token存本地
    setToken(plyload)
  },
  // 给UserInfo赋值
  setUserInfo(state, plyload) {
    state.UserInfo = plyload
  }
}
const actions = {
  // 登录请求
  async Login(context, data) {
    const res = await login(data)
    console.log(res)

    context.commit('setToken', res)
  },
  // 获取用户信息请求
  // 用户切换页面都会发起请求
  async getUserInfo(context) {
    const res = await getInfo()
    context.commit('setUserInfo', res)
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

