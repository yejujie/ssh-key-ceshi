<template>
  <div class="echarts-left22">
    <div id="left22"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// import https from "../http/config.js";
export default {
  name: "Echartsleft22",
    props: {
    // 接收父组件传递过来的信息
    dataListl22: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListl22(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  methods: {
    drawLine() {
           var dataList =this.dataListl22;
          // console.log(dataList);
          var xAxisarr1 = [];
          var seriesArr1 = [];
           var xAxisarr = [];
          var seriesArr = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr1.push(dataList[i].regional_industry);
            seriesArr1.push(dataList[i].count);
          }
           xAxisarr= xAxisarr1.slice(xAxisarr1.length-10,xAxisarr1.length)
            seriesArr= seriesArr1.slice(seriesArr1.length-10,seriesArr1.length)
          // console.log(xAxisarr1);
          // console.log(xAxisarr);

          // console.log(seriesArr1);

          let myChart = this.$echarts.init(document.getElementById("left22"));
            myChart.setOption({
              title: {
                text: "区域分布",
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
              // top:"10%",
              left: "15%",
              right: "10%",
              bottom: "10%"
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
                data: xAxisarr,
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
  },
  mounted() {}
};
</script>

<style scoped>
@import "../style/reset.css";
.echarts-left22 {
  width: 100%;
  height: 100%;
}
#left22 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");

}

</style>
