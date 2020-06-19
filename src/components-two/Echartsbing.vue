<template>
  <div :id="echarts" class="echarts" ref="echarts" style="width:466px;height:300px"></div>
  
</template>
<script>
// 引入echarts
import echarts from "echarts";
export default {
  name: "Echartsbing",
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      myChart: undefined
    };
  },
  watch: {
    chartData(val) {
      this.drawChart();
    }
  },
  methods: {
    drawChart() {
      // const vm = this;
      // console.log("qq")
      // console.log(this.chartData);
      var arr = [];
      var data = [
        "贫困人口",
        "低保人口",
        "特困供养人数",
        "少数民族人数",
        "外出劳工人数",
        "劳动力人数"
      ];
      for (var i = 0; i < this.chartData.length; i++) {
        var obj = {};
        obj.name = data[i];
        obj.value = this.chartData[i];
        arr.push(obj);
      }

      // console.log(arr);
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.echarts));
      // 绘制图表
      this.myChart.setOption({
        //    backgroundColor: 'black',
        title: {
          left: "center"
        },


         tooltip: {
                trigger: "item",
                 formatter: "{a} <br/>{b} : {c} ({d}%)",
                axisPointer: {
                  type: "shadow"
                }
              },
        // tooltip: {
        //   trigger: "item",
        //  
        // },
         grid: {
          left: "5%",
          right: "20%",
          bottom: "10%",
          containLabel: true
        },
        legend: {
          // orient: "vertical",
          left: "0%",
          top: "30%",
          itemWidth: 10, //图例的宽度
          itemHeight: 10, //图例的高度
          // itemGap: 25,
          selectedMode: false, //取消图例上的点击事件
          orient: "vertical",
          left: "left",
          data: data,
          textStyle: {
            color: "#000000",
            fontSize: 12
          }
        },
        // color: [
        //   "#efd506",
        //   "#0bdafc",
        //   "#f05a80",
        //   "#ffa211",
        //   "#95f28a",
        //   "#33C6F7",
        //   "#FF9090"
        // ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["50%", "50%"],
            data: arr,
            label: {
                    normal: {
                       position: 'inner',
                       show : false
                    }
                  },

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  },
  computed: {
    echarts() {
      return "echarts" + Math.random() * 100000;
    }
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>