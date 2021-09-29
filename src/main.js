import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

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

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

// 引入文件，定义的所有方法
import * as filters from '@/filters'

// 过滤器员工里的聘用形式
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
