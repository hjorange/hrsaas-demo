<template>
  <div id="main">
    aa
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {

    }
  },

  created() {

  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('main'))
      // 准备数据
      const option = {
        title: {
          text: 'Basic Radar Chart'
        },

        legend: {
          data: ['笑', '晓']
        },
        radar: {
          axisName: {
            color: '#428BD4' },

          // shape: 'circle',
          indicator: [
            { name: '考勤', max: 6500 },
            { name: '加班', max: 16000 },
            { name: '拍马屁', max: 30000 },
            { name: '小费', max: 38000 },
            { name: '帮助同事', max: 52000 },
            { name: '培训新人', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            color: ['#77EADF', '#91CC75'],
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '笑'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '晓'
              }
            ]
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
#main{
  width: 500px;
  height: 500px;

}
</style>
