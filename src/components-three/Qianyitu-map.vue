<template>
  <div class="echarts">
    <div ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import https from "../http/config.js";
import "echarts/map/js/china.js"; // 引入中国地图数据
export default {
  //   props: ["renderData"],
   props: {
    // 接收父组件传递过来的信息
    dataListqy: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListqy(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.initEchartMap();
  },
  methods: {
    drawLine() {
     
          // console.log(res.data.staff_turnover_information);
          var seriesArr = this.dataListqy;
          // console.log(seriesArr);
          //这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
          let myChart = echarts.init(this.$refs.myEchart);
          window.onresize = myChart.resize;
          myChart.setOption({
            backgroundColor: "#080a20",
            title: {
              text: "务工人员流向图",
              //   subtext: "数据纯属虚构",
              left: "center",
              top:"5%",
              textStyle: {
                color: "#fff",
                fontSize:"20"
              }
            },
            tooltip: {
              trigger: "item"
            },
            legend: {
              orient: "vertical",
              top: "bottom",
              left: "right",
              textStyle: {
                color: "#fff"
              },
              selectedMode: "single"
            },
            geo: {
              map: "china",
              label: {
                normal: {
                  show: true, // 是否显示对应地名
                  textStyle: {
                    color: "#ffffff"
                  }
                },
                emphasis: {
                  show: false
                }
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: "#132937",
                  borderColor: "#0692a4"
                },
                emphasis: {
                  areaColor: "#0b1c2d"
                }
              }
            },
            series: [
              {
                type: "lines",
                // zlevel: 2,
                zlevel: 1,
                effect: {
                  show: true,
                  period: 6,
                  trailLength: 0.7,
                  color: "#fff",
                  symbolSize: 3
                },
                lineStyle: {
                  normal: {
                    color: "#a6c84c",
                   width: 0,
                curveness: 0.2
                  }
                },
                tooltip: {
                  trigger: "item"
                },
                data: seriesArr
              }
            ]
          });
       
    }
  }
};
</script>
<style >
.echarts {
  width: 100%;
  height: 100%;
}
.echarts > div {
  width: 100%;
  height: 100%;
}
</style>