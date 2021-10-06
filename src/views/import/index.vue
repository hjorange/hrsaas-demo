<template>
  <div>
    <UploadExecl :on-success="onSuccess" />
  </div>
</template>

<script>
import { AddEmployeeAll } from '@/api/employees.js'
export default {
  data() {
    return {

    }
  },

  created() {

  },

  methods: {
    async onSuccess({ results }) {
      const obj = {}
      // 提前定义，否则需要判断
      const userRelations = {
        '入职日期': 'timeOfEntry',
        '手机号': 'mobile',
        '姓名': 'username',
        '转正日期': 'correctionTime',
        '工号': 'workNumber'
      }

      const execlArr = results.map(item => {
        Object.keys(item).forEach(key => {
          // 判断是否是需要转换日期的，必须return，结束这次循环
          if (key === '入职日期') {
            obj[userRelations[key]] = this.formatDate(item[key], '/')
            return false
          }
          if (key === '转正日期') {
            obj[userRelations[key]] = this.formatDate(item[key], '/')
            return false
          }
          // 循环数组将key替换成我们需要的名字
          // 相当于obj['timeOfEntry']=item['入职日期']
          obj[userRelations[key]] = item[key]
        })
        return obj

      //   return {
      //     username: item['姓名'],
      //     mobile: item['手机号'],
      //     workNumber: item['工号'],
      //     timeOfEntry: item['入职日期'],
      //     correctionTime: item['转正日期']
      //   }
      })
      await AddEmployeeAll(execlArr)
    },
    // 将数字转换日期方法
    formatDate(numb, format) {
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }
  }
}
</script>

<style scoped>

</style>
