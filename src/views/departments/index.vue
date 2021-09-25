<template>
  <div class="department-container">
    <div class="app-container">
      <el-card class="department-box box-card">
        <DeptOption :row="company" :is-root="true" />
        <!-- 树形 -->
        <el-tree :data="depts" :props="defaultProps" :default-expand-all="true">
          <template v-slot="scope">
            <DeptOption :row="scope.data" @ondel="loadDepartment" />
          </template>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getDepartment } from '@/api/department.js'
import { listTree } from '@/utils'
import DeptOption from './components/dept-option.vue'
export default {
  name: 'Departments',
  components: {
    DeptOption
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      company: {},
      depts: []
    }
  },

  created() {
    this.loadDepartment()
  },

  methods: {
    async loadDepartment() {
      const res = await getDepartment()
      console.log(res)
      this.company = { name: res.companyName, manager: '负责人' }
      // 调用方法，把数据改成树形结构的
      this.depts = listTree('', res.depts)
    }
  }
}
</script>

<style scoped lang='scss'>
.department-box{
  .company-tiy{
    font-size: 14px;
    font-weight: 700;
  }
  .company-option{
    display: flex;
    justify-content: flex-end;
    span:nth-child(1){
      margin-right: 10px;
    }
  }
  .el-tree{
    margin-top: 10px;
    border-top: 1px solid #ccc;
  }
}

</style>
