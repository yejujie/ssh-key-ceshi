<template>
  <div class="echarts-right2">
    <div id="right2"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsright2",
   props: {
    // 接收父组件传递过来的信息
    dataListr2: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListr2(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  methods: {
    drawLine() {
          var dataList = this.dataListr2;
          var xAxisarr = [];
          var seriesArr1 = [];
          var seriesArr2 = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr.push(dataList[i].village_name);
            seriesArr1.push(dataList[i].three_key_households_lost);
            seriesArr2.push(dataList[i].three_key_completion_rate);
          }
          let myChart = this.$echarts.init(document.getElementById("right2"));
          myChart.setOption({
            // color: ["#5793f3", "#d14a61", "#675bba"],
            title: {
              text: "三类重点户有输转意愿劳动力",
              textStyle: {
                color: "#ffffff"
              }
            },
            color: [
              "#0bdafc",
              "#efd506",
              "#ffa211",
              "#f05a80",
              "#efd506",
              "#1671ff",
              "#95f28a"
            ],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross"
              }
            },
            grid: {
              // top:"10%",
              left: "8%",
              right: "8%",
              bottom: "18%"
            },
            toolbox: {
              feature: {
                // dataView: { show: true, readOnly: false },
                // restore: { show: true },
                // saveAsImage: { show: true }
              }
            },
            legend: {
              // left: "10%",
              top: "8%",
              textStyle: {
                color: "#ffffff",
                fontSize: 14
              }
            },
            xAxis: [
              {
                type: "category",
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                },
                axisLabel: {
                  interval: 0,
                   rotate:60,
                  // formatter: function(value) {
                  //   //x轴的文字改为竖版显示
                  //   var str = value.split("");
                  //   return str.join("\n");
                  // }
                },

                data: xAxisarr
              }
            ],
            yAxis: [
              {
                type: "value",
                name: "完成人数",
                min: 0,
                max: 12,
                position: "left",
                splitLine: {
                show: true,
                lineStyle: {
                  color: ["#315070"],
                  width: 1,
                  type: "solid"
                }
              },
                axisLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                },
                axisLabel: {
                  // formatter: '{value} ml'
                }
              },
              {
                type: "value",
                name: "转化率",
                min: 0,
                max: 1.2,
                position: "right",
                splitLine: {
                show: true,
                lineStyle: {
                  color: ["#315070"],
                  width: 1,
                  type: "solid"
                }
              },
                // offset: 80,
                axisLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                },
                axisLabel: {
                  // formatter: '{value} ml'
                }
              }
            ],
            series: [
              {
                name: "完成人数",
                type: "bar",
                barWidth: 8,
                data: seriesArr1
              },
              {
                name: "转化率",
                type: "bar",
                barWidth: 8,
                yAxisIndex: 1,
                data: seriesArr2
              }
            ]
          });
       
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/reset.css";
.echarts-right2 {
  width: 100%;
  height: 100%;
}
#right2 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");
}
/* #right-d {
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff;
} */
</style>
