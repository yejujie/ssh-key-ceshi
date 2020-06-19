<template>
  <div :id="echarts" class="echarts" ref="echarts" style="width:466px;height:300px"></div>
</template>

<script>
// 引入echarts
import echarts from "echarts";
export default {
  name: "Echartszhu",
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      myChart: undefined
    };
  },
  watch: {
    chartData(val) {
      this.drawChart();
    }
  },
  methods: {
    drawChart() {
      const vm = this;
      // console.log("qq")
      // console.log(this.chartData);
      var data = [
        "劳动力人数",
        "外出劳工人数",
        "少数民族人数",
        "特困供养人数",
        "低保人口",
        "贫困人口",
        "总人口"
        //  "总人口",
        // "贫困人口",
        // "低保人口",
        // "特困供养人数",
        // "少数民族人数",
        // "外出劳工人数",
        // "劳动力人数"
      ];
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.echarts));

      // 绘制图表
      this.myChart.setOption({
        //    backgroundColor: 'black',
        title: {
          text: "基本信息",
          textStyle: {
            color: "#000000"
            // fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        grid: {
          top:"10%",
          left: "5%",
          right: "20%",
          bottom: "20%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          }
        },
        yAxis: {
          type: "category",
          data: data,
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 12,
            data: this.chartData
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
.echarts {
  width: 100%;
  height: 100%;
}
</style>