<template>
  <div class="three">
    <div class="left">
      <div class="three-left1">
        <div id="echartsleft1">
          <EChartsleft11 :dataListl11="dataListl11"></EChartsleft11>
        </div>
        <div id="echartsleft11">
          <EChartsleft1 :dataListl1="dataListl1"></EChartsleft1>
        </div>
        <div class="button-left1">
          <el-button plain size="small" @click="openleft1()">村平均收入</el-button>
          <el-button plain size="small" @click="openleft11()">行业收入</el-button>
        </div>
      </div>
      <div class="three-left2">
        <div id="echartsleft2">
          <EChartsleft22 :dataListl22="dataListl22"></EChartsleft22>
        </div>
        <div id="echartsleft22">
          <EChartsleft2 :dataListl2="dataListl2"></EChartsleft2>
        </div>
        <div class="button-left2">
          <el-button plain size="small" @click="openleft2()">行业分布</el-button>
          <el-button plain size="small" @click="openleft22()">区域分布</el-button>
        </div>
      </div>
    </div>
    <div class="contont">
      <Qianyitumap :dataListqy="dataListqy"></Qianyitumap>
    </div>
    <div class="right">
      <div class="three-right1">
        <div id="echartsright1">
          <EChartsright11 :dataListr11="dataListr11"></EChartsright11>
        </div>
        <div id="echartsright11">
          <EChartsright1 :dataListr1="dataListr1"></EChartsright1>
        </div>
        <div class="button-right1">
          <el-button plain size="small" @click="openright1()">劳动力占比</el-button>
          <el-button plain size="small" @click="openright11()">务工人员占比</el-button>
        </div>
      </div>
      <div class="three-right2">
        <EChartsright2 :dataListr2="dataListr2"></EChartsright2>
      </div>
    </div>
  </div>
</template>

<script>
import https from "../http/config.js";

import EChartsleft1 from "../components-three/Echarts-left1";
import EChartsleft11 from "../components-three/Echarts-left11";

import EChartsleft2 from "../components-three/Echarts-left2";
import EChartsleft22 from "../components-three/Echarts-left22";

import EChartsright1 from "../components-three/Echarts-right1";
import EChartsright11 from "../components-three/Echarts-right11";

import EChartsright2 from "../components-three/Echarts-right2";
import Qianyitumap from "../components-three/Qianyitu-map";

export default {
  name: "Three",
  data() {
    return {
      dataListl1:null,
      dataListl11:null,

      dataListl2:null,
      dataListl22:null,

      dataListr1:null,
      dataListr11:null,

      dataListr2:null,
      dataListqy:null,

    };
  },
  components: {
    EChartsleft1,
    EChartsleft11,

    EChartsleft2,
    EChartsleft22,

    EChartsright1,
    EChartsright11,

    EChartsright2,
    Qianyitumap
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      https
        .Get("information_for_migrant_workers")
        .then(res => {
          this.dataListl1 = res.data.wages_average_village;
          // console.log(this.dataListl1);
          this.dataListl11 = res.data.industry_average_revenue;
          // console.log(this.dataListl11);


          this.dataListl2 = res.data.work_industry_distribution;
          this.dataListl22 = res.data.work_regional_distribution;


          this.dataListr1 = res.data.labor_share_village;
          this.dataListr11 = res.data.migrant_workers_and_labor;


          this.dataListr2 = res.data.three_key_households;
           this.dataListqy = res.data.staff_turnover_information;

        })
        .catch(err => {});
    },
    openleft1() {
      document.getElementById("echartsleft1").style.display = "none";
      document.getElementById("echartsleft11").style.display = "block";
    },
    openleft11() {
      document.getElementById("echartsleft1").style.display = "block";
      document.getElementById("echartsleft11").style.display = "none";
    },
    openleft2() {
      document.getElementById("echartsleft2").style.display = "none";
      document.getElementById("echartsleft22").style.display = "block";
    },
    openleft22() {
      document.getElementById("echartsleft2").style.display = "block";
      document.getElementById("echartsleft22").style.display = "none";
    },
    openright1() {
      document.getElementById("echartsright1").style.display = "none";
      document.getElementById("echartsright11").style.display = "block";
    },
    openright11() {
      document.getElementById("echartsright1").style.display = "block";
      document.getElementById("echartsright11").style.display = "none";
    }
  }
};
</script>
<style scoped>
.three {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.three > div {
  float: left;
}
.three > .left {
  width: 25%;
  height: 100%;
}
.three > .left > .three-left1 {
  width: 100%;
  height: 50%;
  /* background-color: #000000; */
  position: relative;
}
.three > .left > .three-left1 > #echartsleft1 {
  width: 100%;
  height: 90%;
  /* background-color: red; */
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .left > .three-left1 > #echartsleft1 > div {
  width: 100%;
  height: 100%;
}
.three > .left > .three-left1 > #echartsleft11 {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: yellow; */
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .left > .three-left1 > #echartsleft11 > div {
  width: 100%;
  height: 100%;
}
.three > .left > .three-left1 > .button-left1 {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 100%;
  height: 10%;
  /* background-color: green; */
}
.three > .left > .three-left2 {
  width: 100%;
  height: 50%;
  /* background-color: #111111; */
  position: relative;
}

.three > .left > .three-left2 > #echartsleft2 {
  width: 100%;
  height: 90%;
  /* background-color: red; */
}
.three > .left > .three-left2 > #echartsleft2 > div {
  width: 100%;
  height: 100%;
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .left > .three-left2 > #echartsleft22 {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: yellow; */
}
.three > .left > .three-left2 > #echartsleft22 > div {
  width: 100%;
  height: 100%;
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .left > .three-left2 > .button-left2 {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 100%;
  height: 10%;
  /* background-color: green; */
}

.three > .contont {
  width: 50%;
  height: 100%;
  /* background-color: blue; */
}
.three > .right {
  width: 25%;
  height: 100%;
  /* background-color: yellow; */
}
.three > .right > .three-right1 {
  width: 100%;
  height: 50%;
  /* background-color: #222222; */
  position: relative;
}

.three > .right > .three-right1 > #echartsright1 {
  width: 100%;
  height: 90%;
  /* background-color: red; */
}
.three > .right > .three-right1 > #echartsright1 > div {
  width: 100%;
  height: 100%;
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .right > .three-right1 > #echartsright11 {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: yellow; */
}
.three > .right > .three-right1 > #echartsright11 > div {
  width: 100%;
  height: 100%;
  /* background-image: url("../images/images-index/bg.png"); */
}
.three > .right > .three-right1 > .button-right1 {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 100%;
  height: 10%;
  /* background-color: green; */
}
.three > .right > .three-right2 {
  width: 100%;
  height: 50%;
  /* background-color: #333333; */
  /* background-image: url("../images/images-index/bg.png"); */
}
</style>
