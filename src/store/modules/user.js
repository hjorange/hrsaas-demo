// 引入登录接口
import { login } from '@/api/user.js'
const state = {}
const mutations = {}
const actions = {
  async Login(context, data) {
    const res = await login(data)
    console.log(res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

