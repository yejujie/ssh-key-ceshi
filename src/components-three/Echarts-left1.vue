<template>
  <div class="echarts-left1">
    <div id="left1"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsleft1",
 props: {
    // 接收父组件传递过来的信息
    dataListl1: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListl1(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  methods: {
     drawLine() {
          var dataList = this.dataListl1;
          // console.log(dataList);
          var xAxisarr = [];
          var seriesArr = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr.push(dataList[i].village_name);
            seriesArr.push(dataList[i].average_wages);
          }
          // console.log(xAxisarr);
          // console.log(seriesArr);

          let myChart = this.$echarts.init(document.getElementById("left1"));
          myChart.setOption({
            title: {
              text: "村平均收入",
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
            grid: {
              // top:"10%",
              left: "12%",
              right: "8%",
              bottom: "20%"
            },
            xAxis: {
              type: "category",
              data: xAxisarr,

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
              }
            },
            yAxis: {
              type: "value",
              min: 3100,
              max: 3700,
              interval: 100,
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
              }
            },
            series: [
              {
                data: seriesArr,
                type: "line"
              }
            ]
          });
       
    }
   
  },
  mounted() {}
};
</script>

<style scoped>
@import "../style/reset.css";
.echarts-left1 {
  width: 100%;
  height: 100%;
}
#left1 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");
}
</style>
