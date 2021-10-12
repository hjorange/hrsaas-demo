<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PageTools :show-before="false">
        <template v-slot:after>
          <el-button type="primary" icon="el-icon-edit" size="small">
            添加权限
          </el-button>
        </template>
      </PageTools>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Permission',
  data() {
    return {

    }
  },

  created() {

  },

  methods: {

  }
}
</script>

<style scoped lang='scss'>

</style>
