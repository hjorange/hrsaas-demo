<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PageTools :show-before="false">
        <template v-slot:after>
          <el-button size="mini" type="primary">导入</el-button>
          <el-button size="mini" type="primary">导出</el-button>
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-plus"
          >新增员工</el-button>
        </template>
      </PageTools>

      <el-card>
        <el-table border :data="employees">
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username" />
          <el-table-column label="工号" sortable="" prop="workNumber" />
          <el-table-column label="聘用形式" sortable="">
            <template v-slot="{row}">
              {{ row.formOfEmployment | formatHireType }}
            </template>
          </el-table-column>
          <el-table-column label="部门" sortable="" prop="departmentName" />
          <el-table-column label="入职时间" sortable="">
            <template v-slot="{row}">
              {{ row.timeOfEntry | formTime }}
            </template>
          </el-table-column>
          <el-table-column label="账户状态" sortable="">
            <template v-slot="scoped">
              {{ scoped.row.enableState?'可用':'不可用' }}
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template>
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height: 60px">
          <el-pagination
            layout="total,prev, pager, next"
            :total="total"
          />
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getEmployeesList } from '@/api/employees.js'
export default {
  name: 'Employees',
  data() {
    return {
      employees: [],
      tablePage: {
        page: 1,
        size: 10
      },
      total: ''
    }
  },

  created() {
    this.loadEmployeesList()
  },

  methods: {
    async loadEmployeesList() {
      const res = await getEmployeesList(this.tablePage)
      console.log(res)
      this.employees = res.rows
      this.total = res.total
    }

  }
}
</script>

<style scoped lang='scss'>

</style>
