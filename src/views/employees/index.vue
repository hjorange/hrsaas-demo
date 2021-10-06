<template>
  <div class="dashboard-container">
    <div class="app-container">
      <PageTools :show-before="false">
        <template v-slot:after>
          <el-button size="mini" type="primary" @click="$router.push('/employees/import')">导入</el-button>
          <el-button size="mini" type="primary">导出</el-button>
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-plus"
            @click="showDialog=true"
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
          <el-table-column label="部门" sortable="">
            <template v-slot="{row}">
              {{ row.departmentName?row.departmentName:'暂无数据' }}
            </template>
          </el-table-column>
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
            <template v-slot="{row}">
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" size="small" @click="onClickDel(row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height: 60px">
          <el-pagination
            layout="total,prev, pager, next"
            :total="total"
            :page-size="tablePage.size"
            @current-change="handleCurrentChange"
          />
        </el-row>
      </el-card>
    </div>
    <AddEmployees :show-dialog.sync="showDialog" @AddEmployees="loadEmployeesList" />
    <!-- <AddEmployees v-model="showDialog" /> -->
  </div>
</template>

<script>
import { getEmployeesList, delEmployee } from '@/api/employees.js'
import AddEmployees from './components/AddEmployees.vue'
export default {
  name: 'Employees',
  components: {
    AddEmployees
  },
  data() {
    return {
      employees: [],
      tablePage: {
        page: 1,
        size: 10
      },
      total: null,
      // 新增弹窗
      showDialog: false
    }
  },

  created() {
    this.loadEmployeesList()
  },

  methods: {
    // 获取员工信息
    async loadEmployeesList() {
      const res = await getEmployeesList(this.tablePage)
      console.log(res)
      this.employees = res.rows
      this.total = res.total
    },
    // 点击页码变化
    handleCurrentChange(val) {
      this.tablePage.page = val
      this.loadEmployeesList()
    },
    // 点击删除,通过插槽拿到当前点击数据，传值
    onClickDel(row) {
      this.$confirm('此操作将永久删除该员工, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        await delEmployee(row.id)
        this.$message.success('删除成功!')
        this.loadEmployeesList()
      }).catch(() => {
      })
    }

  }
}
</script>

<style scoped lang='scss'>

</style>
