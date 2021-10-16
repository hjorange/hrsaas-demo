<template>
  <div style="margin:2px 10px 0 ">
    <el-dropdown trigger="click" @command="onCommand">
      <!-- 这里必须加一个div -->
      <div>
        <svg-icon style="color:#fff;font-size:20px" icon-class="language" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :class="{active:$root.$i18n.locale==='zh'}">中文</el-dropdown-item>
        <el-dropdown-item command="en" :class="{active:$root.$i18n.locale==='en'}">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {
    // 切换语言
    onCommand(type) {
      // type为command的值
      this.$root.$i18n.locale = type
      // 将选中的语言状态保存在本地
      Cookies.set('lang', type)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped lang="scss">
.active{
  background-color: #ecf5ff;
  color: #66b1ff;
}
</style>
