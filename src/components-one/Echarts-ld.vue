<template>
  <div class="echarts-ld">
    <div id="left-d"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";

export default {
  name: "Echartsld",
  props: {
    // 接收父组件传递过来的信息
    dataListld: {
      type: Array,
      default: () => []
      // default:""

    }
  },
  data() {
    return {};
  },
  watch: {
    dataListld(newVal) {
      this.drawLine();
    }
  },
  methods: {
     drawLine() {
    //  console.log(this.dataListld);
          // var dataData = res.data.project_investment;
          var dataData1 = this.dataListld;
          // var dataData2 = this.dataListld.value;
          var xAxisArr = [];
          var seriesArr = [];
          // var dataList = Object();
          for (var i = 0; i < dataData1.length; i++) {
            xAxisArr.push(dataData1[i].project_subtype);
            seriesArr.push(dataData1[i].value);

          }
          // for (var j = 0; j < dataData2.length; j++) {
          //   seriesArr.push(dataData2[j]);
          // }
          // console.log(xAxisArr);
          // console.log(seriesArr);
          let myChart = this.$echarts.init(document.getElementById("left-d"));
          chartFn();
          function chartFn() {
            myChart.setOption({
              title: {
                // text: "基本信息",
                textStyle: {
                  color: "#ffffff"
                  // fontSize: 14
                }
              },
              color: [
                "#0bdafc",
                "#ffa211",
                "#f05a80",
                "#efd506",
                "#1671ff",
                "#95f28a"
              ],
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
              legend: {},
              grid: {
                top:"10%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              xAxis: {
                type: "value",
                boundaryGap: [0, 0.01],
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
                  },
              },
              yAxis: {
                type: "category",
                data: xAxisArr,
                axisLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                }
              },
              series: [
                {
                  name: "",
                  type: "bar",
                   barWidth: 12,
                  data: seriesArr
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
.echarts-ld {
  width: 100%;
  height: 100%;
}
#left-d {
  width: 100%;
  height: 100%;
}
/* #left-d {
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
