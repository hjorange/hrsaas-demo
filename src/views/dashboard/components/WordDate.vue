<template>
  <div>
    <el-row>
      <el-col>
        <el-select
          v-model="selectYears"
          size="mini"
          @change="updateCalendar"
        >
          <el-option
            v-for="item in years"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
        <el-select v-model="selectMonth" size="mini" placeholder="请选择" @change="updateCalendar">
          <el-option
            v-for="item in 12"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-calendar v-model="currentDate">
      <template
        v-slot:dateCell="{date, data}"
      >
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-')[2] }}
          <!-- v-if="isWeek(date) 判断是否为周末 -->
          <span v-if="isWeek(date)" class="text">休</span>
        </p>

      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'WordDate',
  data() {
    return {
      years: [], // 年份数组
      selectYears: null, // 选择器默认选中年份值
      selectMonth: null, // 选择器默认选中月份值
      currentDate: new Date()// 日历
    }
  },

  created() {
    // 默认选中年份赋值当前年份
    this.selectYears = new Date().getFullYear()
    // 处理年份数组数据渲染的两种方法
    // 第一种性能比较好
    this.years = Array.from(Array(11), (value, index) => this.selectYears - 5 + index)
    // this.years = Array(11).fill('').map((item, index) => this.selectYears - 5 + index)
    // 默认选中月份赋值当前月份
    this.selectMonth = new Date().getMonth() + 1
  },

  methods: {
    // 周末加休
    isWeek(date) {
      // date.getDay()拿到当前的日期
      return date.getDay() === 6 || date.getDay() === 0
    },
    // 选择器发生变化日历变化
    updateCalendar() {
      // 拿到选择器选中的年月
      const date = this.selectYears + '-' + this.selectMonth
      // 选择器选中的年月赋值给日历
      this.currentDate = new Date(date)
    }
  }
}
</script>

<style scoped lang='scss'>
.el-row .el-col {
  display: flex;
  justify-content: flex-end;
  .el-select {
    width: 80px;
    margin: 0 3px;
  }
}

 ::v-deep .el-calendar-day {
  height:  auto;
  text-align: center;
  line-height: 30px;
 }
 ::v-deep .el-calendar-table__row td,::v-deep .el-calendar-table tr td:first-child,  ::v-deep .el-calendar-table__row td.prev{
  border:none;
 }
.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text{
  width: 20px;
  height: 20px;
  line-height: 20px;
 display: inline-block;

}

::v-deep thead {
  th {
    font-size: 14px;
    font-weight: bold;
  }
}
 ::v-deep .el-calendar-table td.is-selected .text{
   background: #409eff;
   color: #fff;
   border-radius: 50%;
 }
 ::v-deep .el-calendar__header {
   display: none
 }
 .el-calendar {
   .text {
     font-size: 12px;
     color: #fff;
     background: #fa7c4d;
     width: 20px;
     height: 20px;
     border-radius: 20px;
     display: inline-block;
     line-height: 20px;
     text-align: center;
   }
 }
</style>
