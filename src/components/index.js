import PageTools from '@/components/PageTools'

export default {
// Vue.use内部会解析一个对象里面有install
  install(Vue) {
    Vue.component('PageTools', PageTools)
  }

}
