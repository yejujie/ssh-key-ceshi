<template>
  <div class="echarts-lc">
    <div id="left-c"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartslc",
  props: {
    // 接收父组件传递过来的信息
    dataListlc1: {
      type: Array,
      default: () => []
      // default: ""
    },
    dataListlc2: {
      type: Array,
      default: () => []
      // default: ""
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListlc1(newVal) {
      this.drawLine();
    },
    dataListlc2(newVal) {
      this.drawLine();
    }
  },
  computed: {},
  methods: {
    drawLine() {
      console.log(this.dataListlc1);
      console.log(this.dataListlc2);
      var dataData1 = this.dataListlc1;
      var dataData2 = this.dataListlc2;
      // var dataData3 = this.dataListlc2.value;

      
      var xAxisArr = [];
      var seriesArr1 = [];
      var seriesArr2 = [];


      for (var i = 0; i < dataData1.length; i++) {
        xAxisArr.push(dataData1[i].year);
        seriesArr1.push(dataData1[i].value);

      }
      for (var j = 0; j < dataData2.length; j++) {
        seriesArr2.push(dataData2[j].value);
      }
      // for (var m = 0; m < dataData3.length; m++) {
      //   seriesArr2.push(dataData3[m]);
      // }
      let myChart = this.$echarts.init(document.getElementById("left-c"));
      chartFn();
      function chartFn() {
        myChart.setOption({
          title: {
            // text: "三类重点户有输转意愿劳动力",
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
            top: "13%",
            left: "12%",
            right: "12%",
            bottom: "10%"
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
                interval: 0
                // formatter: function(value) {
                //   //x轴的文字改为竖版显示
                //   var str = value.split("");
                //   return str.join("\n");
                // }
              },

              data: xAxisArr
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "项目数量",
              // min: 0,
              // max: 12,
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
              name: "项目金额(万元)",
              // min: 0,
              // max: 1.2,
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
              name: "项目数量",
              type: "bar",
              barWidth: 12,
              data: seriesArr1
            },
            {
              name: "项目金额",
              type: "bar",
              barWidth: 12,
              yAxisIndex: 1,
              data: seriesArr2
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
.echarts-lc {
  width: 100%;
  height: 100%;
}
#left-c {
  width: 100%;
  height: 100%;
}
/* #right-t{
   width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
