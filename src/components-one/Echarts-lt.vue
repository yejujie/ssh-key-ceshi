<template>
  <div class="echarts-lt">
    <div id="left-t"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartslt",
  props: {
    // 接收父组件传递过来的信息
    dataListlt: {
      type: Array,
      default: () => []
      // default:""
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListlt(newVal) {
      this.drawLine();
    }
  },
  methods: {
    drawLine() {
      //  console.log(this.dataListlt);
      // var dataData = res.data.project_investment;
      var dataData1 = this.dataListlt;
      // var dataData2 = this.dataListlt.value;
      var xAxisArr = [];
      var seriesArr = [];
      // var dataList = Object();
      for (var i = 0; i < dataData1.length; i++) {
        xAxisArr.push(dataData1[i].project_type);
        seriesArr.push(dataData1[i].value);
      }
      // for (var j = 0; j < dataData2.length; j++) {
      //   seriesArr.push(dataData2[j]);
      // }
      // console.log(xAxisArr);
      // console.log(seriesArr);
      let myChart = this.$echarts.init(document.getElementById("left-t"));
      chartFn();
      function chartFn() {
        myChart.setOption({
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          grid: {
            top: "10%",
            left: "12%",
            right: "8%",
            bottom: "10%"
          },
          legend: {
            orient: "vertical",
            left: "10%",
            top: "80%",
            // itemWidth: 15, //图例的宽度
            // itemHeight: 15, //图例的高度
            // itemGap: 25,
            selectedMode: false, //取消图例上的点击事件
            // z: 10,
            data: xAxisArr,
            textStyle: {
              color: "#ffffff",
              fontSize: 12
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
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["40%", "60%"],
              center: ["50%", "40%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "25",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: seriesArr[0], name: xAxisArr[0] },
                { value: seriesArr[1], name: xAxisArr[1] },
                { value: seriesArr[2], name: xAxisArr[2] },
                { value: seriesArr[3], name: xAxisArr[3] },
                { value: seriesArr[4], name: xAxisArr[4] },
                { value: seriesArr[5], name: xAxisArr[5] }
              ]
            }
          ]
        });
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../style/reset.css";
.echarts-lt {
  width: 100%;
  height: 100%;
}
#left-t {
  width: 100%;
  height: 100%;
}
/* #left-t {
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
