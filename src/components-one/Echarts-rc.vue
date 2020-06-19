<template>
  <div class="echarts-rc">
    <div id="right-c"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsrc",
  props: {
    // 接收父组件传递过来的信息
    dataListrc: {
      type: Array,
      default: () => []
      // default:""

    }
  },
  data() {
    return {};
  },
  watch: {
    dataListrc(newVal) {
      this.drawLine();
    }
  },
  computed: {},
  methods: {
     drawLine() {
    //  console.log(this.dataListrc);
          var dataData =this.dataListrc;
          // console.log(dataData);
          // var dataData1 = res.data.number_of_poor_rate.year;
          // var dataData2 = res.data.number_of_poor_rate.rate;
          var xAxisArr = [];
          var seriesArr = [];
          for (var i = 0; i < dataData.length; i++) {
            xAxisArr.push(dataData[i].year);
            seriesArr.push(dataData[i].rate * 100);
          }
          // console.log(xAxisArr);
          let myChart = this.$echarts.init(document.getElementById("right-c"));
          chartFn();
          function chartFn() {
            myChart.setOption({
              grid: {
                top: "10%",
                left: "12%",
                right: "8%",
                bottom: "10%"
              },
              tooltip: {
                trigger: "axis",
                formatter: "{c}%",
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
                axisLabel: {
                  show: true,
                  interval: "auto",
                  formatter: "{value} %"
                },
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
                  // areaStyle: {
                  //   color: "#00fdf4",
                  //   width: 1
                  // },
                  itemStyle: {
                    color: "#00fdf4",
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
.echarts-rc {
  width: 100%;
  height: 100%;
}
#right-c {
  width: 100%;
  height: 100%;
}
/* #right-t{
   width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
