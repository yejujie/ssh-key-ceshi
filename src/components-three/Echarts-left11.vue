<template>
  <div class="echarts-left11">
    <div id="left11"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
export default {
  name: "Echartsleft11",
 props: {
    // 接收父组件传递过来的信息
    dataListl11: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    dataListl11(newVal) {
      this.drawLine();
    }
  },
  created() {
    // this.getDataList();
  },
  methods: {
     drawLine() {

           var dataList = this.dataListl11;
          // console.log(dataList);
          var xAxisarr = [];
          var seriesArr = [];
          for (var i = 0; i < dataList.length; i++) {
            xAxisarr.push(dataList[i].industry_name);
            seriesArr.push(dataList[i].average_wages);
          }
          // console.log(xAxisarr);
          // console.log(seriesArr);

          let myChart = this.$echarts.init(document.getElementById("left11"));
            myChart.setOption({
              title: {
              text: "行业收入",
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
               grid: {
              // top:"10%",
              left: "12%",
              right: "8%",
              bottom: "50%"
            },
             tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow"
                }
              },
            xAxis: {
              type: "category",
              data: xAxisarr,
              axisLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                },
              axisLabel:{
                      interval: 0,
                       rotate:60,
        	        		// formatter: function (value) {
        	        		// 	//x轴的文字改为竖版显示
        	        		// 	var str = value.split("");
        	        		// 	return str.join("\n");
        	        		// }
        	        	}

            },
            yAxis: {
              type: "value",
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
                type: "line",
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
.echarts-left11 {
  width: 100%;
  height: 100%;
}
#left11 {
  width: 100%;
  height: 100%;
  background-image: url("../images/images-index/bg.png");

}

</style>
