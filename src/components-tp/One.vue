<template>
  <div class="one">
    <div class="left">
      <div class="left-t">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>项目类型</span>
        </div>
        <div class="warpper">
          <EChartslt :dataListlt="dataListlt"></EChartslt>
        </div>
      </div>

      <div class="left-c">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>项目数量及资金</span>
        </div>
        <div class="warpper">
          <EChartslc :dataListlc1="dataListlc1" :dataListlc2="dataListlc2"></EChartslc>
        </div>
      </div>

      <div class="left-d">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>项目子类型</span>
        </div>
        <div class="warpper">
          <EChartsld :dataListld="dataListld"></EChartsld>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-t">
        <ul>
          <li>
            <div class="box1">
              <ul>
                <li>人口总数</li>
                <li>15360</li>
              </ul>
            </div>
          </li>
          <li>
            <div class="box1">
              <ul>
                <li>贫困人口数</li>
                <li>8722</li>
              </ul>
            </div>
          </li>
          <li>
            <div class="box1">
              <ul>
                <li>未脱贫人口数</li>
                <li>{{dataList1}}</li>
              </ul>
            </div>
          </li>
          <li>
            <div class="box1">
              <ul>
                <li>扶贫项目总数</li>
                <li>{{dataList2}}</li>
              </ul>
            </div>
          </li>
          <li>
            <div class="box1">
              <ul>
                <li>已完成项目</li>
                <li>{{dataList3}}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-d">
        <!-- <Acrgismap></Acrgismap> -->
        <Map :mapData="mapData"></Map>
      </div>
      <div class="content-down">
        <div class="down-l">
          <div class="line">
            <img src="../images/images-body/组.png" alt />
          </div>
          <div class="wenzi">
            <span>产业金额(万元)</span>
          </div>
          <div class="warpper">
            <EChartscl :dataListcl="dataListcl"></EChartscl>
          </div>
        </div>

        <div class="down-r">
          <div class="line">
            <img src="../images/images-body/组.png" alt />
          </div>
          <div class="wenzi">
            <span>产业受惠人数</span>
          </div>
          <div class="warpper">
            <EChartscr :dataListcr="dataListcr"></EChartscr>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right-t">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>贫困人数</span>
        </div>
        <div class="warpper">
          <EChartsrt :dataListrt="dataListrt"></EChartsrt>
        </div>
      </div>
      <div class="right-c">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>贫困发生率</span>
        </div>
        <div class="warpper">
          <EChartsrc :dataListrc="dataListrc"></EChartsrc>
        </div>
      </div>
      <div class="right-d">
        <div class="line">
          <img src="../images/images-body/组.png" alt />
        </div>
        <div class="wenzi">
          <span>平均收入(元)</span>
        </div>
        <div class="warpper">
          <EChartsrd :dataListrd="dataListrd"></EChartsrd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import https from "../http/config.js";
import EChartslt from "../components-one/Echarts-lt";
import EChartslc from "../components-one/Echarts-lc";
import EChartsld from "../components-one/Echarts-ld";
import EChartsrt from "../components-one/Echarts-rt";
import EChartsrc from "../components-one/Echarts-rc";
import EChartsrd from "../components-one/Echarts-rd";
import EChartscl from "../components-one/Echarts-cl";
import EChartscr from "../components-one/Echarts-cr";

// import Acrgismap from "../components-one/Acrgis-map";
import Map from "../components-one/map";

export default {
  name: "One",
  data() {
    return {
      dataList1: "",
      dataList2: "",
      dataList3: "",
      mapData:null,

      dataListlt: null,
      dataListlc1: null,
      dataListlc2: null,

      dataListld: null,

      dataListcl: null,
      dataListcr: null,

      dataListrt: null,
      dataListrc: null,
      dataListrd: null
    };
  },
  components: {
    EChartslt,
    EChartslc,
    EChartsld,
    EChartsrt,
    EChartsrc,
    EChartsrd,
    EChartscl,
    EChartscr,

    // Acrgismap,
    Map
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      https
        .Get("township")
        .then(res => {
          var dataData1 =
            res.data.number_of_people_who_have_not_escaped_poverty;
          this.dataList1 = dataData1[dataData1.length - 1].count;
          var dataData2 = res.data.project_information;
          this.dataList2 = dataData2.total_project;
          var dataData3 = res.data.project_information;
          this.dataList3 = dataData3.finish_project;


          this.dataListlt = res.data.project_type;
          this.dataListlc1 = res.data.project_count;
          this.dataListlc2 = res.data.project_investment;
          this.dataListld = res.data.project_subtype;

          this.dataListcl = res.data.poverty_alleviation_industry;
          this.dataListcr = res.data.poverty_alleviation_industry;

          this.dataListrt = res.data.number_of_poor;
          this.dataListrc = res.data.number_of_poor_rate;
          this.dataListrd = res.data.township_average_income;
  
          this.mapData =res.data.village_latitude_and_longitude_information;
        })
        .catch(err => {});
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/reset.css";
@import "../font/font.css";
.one {
  width: 100%;
  height: 100%;
}

.one > div {
  float: left;
}

.one > .left {
  width: calc(25%);
  height: calc(100%);
}
.one > .left > div {
  width: 100%;
  height: 33%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
.one > .left > div > .line {
  width: 50%;
}
.one > .left > div > .line > img {
  width: 100%;
  height: 100%;
}
.one > .left > div > .line > span {
  width: 100%;
  height: 100%;
}
.one > .left > div > .wenzi {
  color: #ffffff;
  position: absolute;
  top: 21px;
  left: 25px;
}
.one > .left > div > .warpper {
  width: 100%;
  height: 100%;
  /* background-color: #ffffff; */
  border: 2px solid #2b8fff;
  opacity: 0.8;
}
.one > .left > div > .warpper > div {
  width: 100%;
  height: 100%;
}

.one > .content {
  width: 50%;
  height: calc(100% - 20px);
}
.one > .content > .content-t > ul::after {
  display: block;
  content: "";
  clear: both;
}
.one > .content > .content-t > ul > li > div {
  float: left;
  width: 20%;
  height: 100px;
  text-align: center;
  color: #ffffff;
}
.one > .content > .content-t > ul > li > div > ul > li:nth-child(2) {
  padding: 10px 10px;
  height: 40px;
  font-size: 40px;
  font-family: LetsgoDigitalRegular;
  color: #efd506;
  /* border:1px solid red; */
}

.one > .content > .content-d {
  width: 100%;
  height: calc(70% - 120px);
  overflow: hidden;
  border: 2px solid #2b8fff;
}
.one > .content > .content-d > div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.one > .content > .content-down {
  width: 100%;
  margin-top: 10px;
  height: calc(30% - 10px);
  /* background-color: red; */
  /* padding-top: 10px; */
}
.one > .content > .content-down > div {
  float: left;
  width: 50%;
  height: 100%;
  /* background-color: green; */
  position: relative;
}

.one > .content > .content-down > div > .line {
  width: 40%;
}
.one > .left > div > .line > img {
  width: 100%;
  height: 100%;
}
.one > .content > .content-down > div > .wenzi {
  color: #ffffff;
  position: absolute;
  top: 0px;
  left: 5px;
}
.one > .content > .content-down > div > .wenzi > span {
  width: 100%;
  height: 100%;
}
.one > .content > .content-down > div > .warpper {
  width: 100%;
  height: 100%;
  /* background-color: #ffffff; */
  border: 2px solid #2b8fff;
  opacity: 0.8;
}
.one > .content > .content-down > div > .warpper > div {
  width: 100%;
  height: 100%;
}

.one > .right {
  width: calc(25%);
  height: calc(100%);
}
.one > .right > div {
  width: 100%;
  height: 33%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
.one > .right > div > .line {
  width: 40%;
}
.one > .right > div > .wenzi {
  color: #ffffff;
  position: absolute;
  top: 21px;
  left: 25px;
}
.one > .right > div > .warpper {
  width: 100%;
  height: 100%;
  /* background-color: #ffffff; */
  border: 2px solid #2b8fff;
  opacity: 0.8;
}
.one > .right > div > .warpper > div {
  width: 100%;
  height: 100%;
}
</style>
