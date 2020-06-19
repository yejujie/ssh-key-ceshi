<template>
    <div  :id="echarts" class="echarts" ref="echarts"  style="width:466px;height:300px"></div>
</template>

<script>
// 引入echarts
import echarts from "echarts";
export default {
  name: "Echartszhexiantu",
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: () => []
    },
   
  },
  data() {
    return {
      myChart: undefined
    };
  },
  watch: {
    chartData(val) {
      this.drawChart();
    },
   
  },
  methods: {
    drawChart() {
      const vm = this;
      // console.log("qq")
      // console.log(this.chartData);
      var year = [];
      var data = [];
      for (var i = 0; i < this.chartData.length; i++) {
        if (i % 2 == 0) {
          year.push(this.chartData[i]);
        } else {
          data.push(this.chartData[i]);
        }
      }
      // console.log(year);
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.echarts));
      // 绘制图表
      this.myChart.setOption({
        //    backgroundColor: 'black',
        title: {
          text: "人均纯收入变化趋势信息",
           textStyle: {
            color: "#000000",
            // fontSize: 14
          }
        },

        xAxis: {
          name: "年份",
          type: "category",
          boundaryGap: false,

          data: year,
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          }
        },
          grid: {
          left: "5%",
          right: "20%",
          bottom: "10%",
          containLabel: true
        },
         tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        yAxis: {
          name: "元",
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          }
        },
        series: [
          {
            data: data,
            type: "line"
          }
        ]
      });
    }
  },
  computed: {
    echarts() {
      return "echarts" + Math.random() * 100000;
    }
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>