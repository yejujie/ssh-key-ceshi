<template>
  <div class="echarts-right1">
    <div id="right1"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsright1",
   props: {
    // 接收父组件传递过来的信息
    dataListr1: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListr1(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  computed: {},
  methods: {
    drawLine() {
     
          // var dataData = res.data.project_investment;
          var dataList = this.dataListr1;
          // console.log(dataList);
          var xAxisarr = [];
          var seriesArr = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr.push(dataList[i].village_name);
            seriesArr.push(dataList[i].labor_share);
          }
          // console.log(xAxisarr);
          // console.log(seriesArr);
          let myChart = this.$echarts.init(document.getElementById("right1"));
          myChart.setOption({
            title: {
              text: "劳动力占比",
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
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            xAxis: {
              type: "value",
               min: 0,
              max: 1,
              interval: 0.1,
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
              data: [
                "里口村",
                "焦村村",
                "阴坡村",
                "崖窑村",
                "四郎殿村",
                "三星村",
                "盘口村",
                "七千关村",
                "口家村",
                "红崖湾村",
                "荒场村",
                "朱家沟村"
              ],
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

<style scoped>
@import "../style/reset.css";
.echarts-right1 {
  width: 100%;
  height: 100%;
}
#right1 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");

}
</style>
