<template>
  <div style="margin:2px 10px 0 ">
    <svg-icon icon-class="fullscreen" style="color:#fff; width: 20px; height: 20px" @click="onClick" />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {
    // 全屏功能
    onClick() {
      // 判断能否兼容，有这个功能调用
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }
  }
}
</script>

<style scoped>

</style>
