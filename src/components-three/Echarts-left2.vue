<template>
  <div class="echarts-left2">
    <div id="left2"></div>
  </div>
</template>
<script>
import echarts from "echarts";
// import https from "../http/config.js";

export default {
  name: "Echartsleft2",
   props: {
    // 接收父组件传递过来的信息
    dataListl2: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListl2(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  methods: {
    drawLine() {
          var dataList = this.dataListl2;
          // console.log(dataList);
          var xAxisarr = [];
          var seriesArr = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr.push(dataList[i].work_industry);
            seriesArr.push(dataList[i].count);
          }
          //  console.log(xAxisarr);
          // console.log(seriesArr);

          let myChart = this.$echarts.init(document.getElementById("left2"));
          myChart.setOption({
            title: {
              text: "行业分布",
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
            //    grid: {
            //   top:"10%",
            //   left: "12%",
            //   right: "50%",
            //   bottom: "20%"
            // },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            xAxis: {
              type: "value",
              boundaryGap: [0, 0.01],
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
            yAxis: {
              type: "category",
              data:xAxisarr,
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
                 barWidth: 8,
                data: seriesArr
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
.echarts-left2 {
  width: 100%;
  height: 100%;
}
#left2 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");

}
/* #left-d {
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
