import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import '@/derectives'

// 引入全局的复用组件
import HrsaasUI from '@/components'
// 注册全局的复用组件
Vue.use(HrsaasUI)

// 国际化语言，切换，ElementUI里面的
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

// 引入文件，定义的所有方法
import * as filters from '@/filters'

// 过滤器员工里的聘用形式
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
// 打印功能包
import Print from 'vue-print-nb'
// 提供v-print指令，绑定的值就是需要打印的区域
Vue.use(Print)
// 国际化语言，切换，自己定义的
import i18n from '@/i18n'
// 通过 `i18n` 选项创建 Vue 实例
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
