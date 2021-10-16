import Vue from 'vue'
// 翻译功能
import VueI18n from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Cookies from 'js-cookie'
Vue.use(VueI18n)
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  // 语言状态使用本地保存的，如果本地没有就使用默认中文
  locale: Cookies.get('lang') || 'zh', // 设置地区
  messages: {
    en: {
      ...en,
      ...enLocale
    },
    zh: {
      ...zh,
      ...zhLocale
    }
  }
})

export default i18n
