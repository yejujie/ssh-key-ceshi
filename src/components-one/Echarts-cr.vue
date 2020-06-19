<template>
  <div class="echarts-cr">
    <div id="content-r"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartscr",
 props: {
    // 接收父组件传递过来的信息
    dataListcr: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListcr(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  computed: {},
  methods: {
     drawLine() {
          var dataData = this.dataListcr;
          // console.log(dataData);
          // var dataData1 = res.data.project_count.year;
          // var dataData2 = res.data.project_count.value;
          var xAxisArr = [];
          var seriesArr = [];


          for (var i = 0; i < dataData.length; i++) {
            xAxisArr.push(dataData[i].industry);
            seriesArr.push(dataData[i].households);

          }



          // for (var j = 0; j < dataData2.length; j++) {
          //   seriesArr.push(dataData2[j]);
          // }
          let myChart = this.$echarts.init(document.getElementById("content-r"));
          chartFn();
          function chartFn() {
            myChart.setOption({
                 color: [
                "#0bdafc",
                "#efd506",
                "#ffa211",
                "#f05a80",
                "#efd506",
                "#1671ff",
                "#95f28a"
              ],
              grid: {
                top: "13%",
                left: "12%",
                right: "8%",
                bottom: "10%"
              },
               tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
              xAxis: {
                type: "category",
                data:xAxisArr,
                 axisLine: {
                    lineStyle: {
                      color: "#ffffff"
                    }
                  },
              },
              yAxis: {
                type: "value",
                // name:"万元",
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
              series: [
                {
                  data: seriesArr,
                  type: "bar",
                   barWidth: 30,
                
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
.echarts-cr {
  width: 100%;
  height: 100%;
}
#content-r{
  width: 100%;
  height: 100%;
}
/* #right-t{
   width: 450px;
  height: 450px;
  border: 1px solid #ffffff;

} */
</style>
