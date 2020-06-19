<template>
  <div class="echarts-rt">
    <div id="right-t"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// import https from "../http/config.js";
export default {
  name: "Echartsrt",
  props: {
    // 接收父组件传递过来的信息
    dataListrt: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListrt(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  computed: {},
  methods: {
    drawLine() {
      // console.log(this.dataListrt);
      var dataData = this.dataListrt;
      var xAxisArr = [];
      var seriesArr = [];
      for (var i = 0; i < dataData.length; i++) {
        xAxisArr.push(dataData[i].year);
        seriesArr.push(dataData[i].count);
      }
      let myChart = this.$echarts.init(document.getElementById("right-t"));
      chartFn();
      function chartFn() {
        myChart.setOption({
          color: [
            "#0bdafc",
            "#efd506",
            "#ffa211",
            "#f05a80",
            "#efd506",
            "#1671ff",
            "#95f28a"
          ],
          grid: {
            top: "10%",
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
              type: "bar",
              barWidth: 20
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
.echarts-rt {
  width: 100%;
  height: 100%;
}
#right-t {
  width: 100%;
  height: 100%;
}
/* #right-t{
   width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
