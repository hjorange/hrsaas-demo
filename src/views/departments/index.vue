<template>
  <div class="department-container">
    <div class="app-container">
      <el-card class="department-box box-card">
        <DeptOption :row="company" :is-root="true" />
        <!-- 树形 -->
        <el-tree :data="depts" :props="defaultProps" :default-expand-all="true">
          <template v-slot="scope">
            <DeptOption :row="scope.data" @click-add="clickAdd($event)" @ondel="loadDepartment" />
          </template>
        </el-tree>
      </el-card>
    </div>
    <!-- 添加子部门弹框 -->l
    <AddDept
      :dialog-visible.sync="dialogVisible"
      :row="deptRow"
    />
  </div>
</template>

<script>
import { getDepartment } from '@/api/department.js'
import { listTree } from '@/utils'
import DeptOption from './components/dept-option.vue'
import AddDept from './components/dept-add.vue'
export default {
  name: 'Departments',
  components: {
    DeptOption,
    AddDept
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      company: {},
      depts: [],
      dialogVisible: false,
      deptRow: {}

    }
  },

  created() {
    this.loadDepartment()
  },

  methods: {
    // 查询企业的部门列表
    async loadDepartment() {
      const res = await getDepartment()
      console.log(res)
      this.company = { name: res.companyName, manager: '负责人' }
      // 调用方法，把数据改成树形结构的
      this.depts = listTree('', res.depts)
    },
    // 添加子部门
    clickAdd(data) {
      this.dialogVisible = true
      this.deptRow = data
    }
    // ClickAdd() {
    //   this.dialogVisible = false
    // }
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
