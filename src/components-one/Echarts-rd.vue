<template>
  <div class="echarts-rd">
    <div id="right-d"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsrd",
  props: {
    // 接收父组件传递过来的信息
    dataListrd: {
      type: Array,
      default: () => []
      // default:""
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListrd(newVal) {
      this.drawLine();
    }
  },
  methods: {
    drawLine() {
      var dataData = this.dataListrd;
      var xAxisArr = [];
      var seriesArr = [];
      for (var i = 0; i < dataData.length; i++) {
        xAxisArr.push(dataData[i].year);
        seriesArr.push(dataData[i].average_income);
      }
      let myChart = this.$echarts.init(document.getElementById("right-d"));
      chartFn();
      function chartFn() {
        myChart.setOption({
          grid: {
            top: "12%",
            left: "12%",
            right: "8%",
            bottom: "10%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            nameGap: 15,
            data: xAxisArr,
            axisLine: {
              lineStyle: {
                color: "#ffffff"
              }
            }
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#ffffff"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#315070"],
                width: 1,
                type: "solid"
              }
            }
          },
          series: [
            {
              data: seriesArr,
              smooth: true,
              type: "line",
              //       areaStyle: {
              //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //         offset: 0,
              //         color: '#00fdf9'
              //     }, {
              //         offset: 1,
              //         color: '#ffffff'
              //     }])
              // },
              itemStyle: {
                color: "#00fdf9",
                width: 1
              }
            }
          ]
        });
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/reset.css";
.echarts-rd {
  width: 100%;
  height: 100%;
}
#right-d {
  width: 100%;
  height: 100%;
}
/* #right-d {
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff;
} */
</style>
