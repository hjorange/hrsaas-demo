// 引入登录接口
import { login } from '@/api/user.js'
import { setToken, getToken } from '@/utils/auth.js'
const state = {
  // 存token
  // 调用Cookies里的getToken
  token: getToken()
}
const mutations = {
  setToken(state, plyload) {
    // 给token赋值
    state.token = plyload
    // 调用Cookies里的setToken把token存本地
    setToken(plyload)
  }
}
const actions = {
  async Login(context, data) {
    const res = await login(data)
    console.log(res)

    context.commit('setToken', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

