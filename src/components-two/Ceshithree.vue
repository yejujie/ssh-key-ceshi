<template>
  <div class="csthree">
    <div id="modalthree">
      <button @click="close()" >隐藏</button>
      <table>
        <tr>
          <td>项目名称:</td>
          <!-- <td>project_name</td> -->
          <td>{{dataList.project_name}}</td>

        </tr>
        <tr>
          <td>项目所属村:</td>
          <!-- <td>project_village</td> -->
          <td>{{dataList.project_village}}</td>

        </tr>
        <tr>
          <td>实施单位:</td>
          <!-- <td>implementation_unit</td> -->
          <td>{{dataList.implementation_unit}}</td>

        </tr>
        <tr>
          <td>建设情况:</td>
          <!-- <td>building_progress</td> -->
          <td>{{dataList.building_progress}}</td>

        </tr>
        <tr>
          <td>建设内容:</td>
          <!-- <td>construction_content</td> -->
          <td>{{dataList.construction_content}}</td>

        </tr>
        <tr>
          <td>投入资金:</td>
          <!-- <td>invest_funds</td> -->
          <td>{{dataList.invest_funds}}</td>

        </tr>
       
        <tr>
          <td>是否招标:</td>
          <!-- <td>whether_to_bid</td> -->
          <td>{{dataList.whether_to_bid}}</td>

        </tr>
        <tr>
          <td>年份:</td>
          <!-- <td>year</td> -->
          <td>{{dataList.year}}</td>

        </tr>
         <tr>
          <td>备注:</td>
          <!-- <td>remarks</td> -->
          <td>{{dataList.remarks}}</td>

        </tr>
      </table>
    </div>
    <!-- <div class="echarts"> -->
    <!-- <Echartszhexiantu :chartData="chartData"></Echartszhexiantu> -->
    <!-- </div> -->
  </div>
</template>
<script>
// import echarts from "echarts";
import https from "../http/config.js";
// import Echartszhexiantu from "../components-two/Echartszhexiantu";

export default {
  props: {
    // 接收父组件传递过来的信息
    XiangmuData: {
      type: String,
      default: ""
    }
  },
  watch: {
    XiangmuData(old) {
      //   console.log("change" + old);
      this.getMessage();
    }
  },
  // components: { Echartszhexiantu },
  data() {
    return {
      // msg: "",
      // dataList: "",
      dataList:"",
      // chartData: []
    };
  },
  created() {
    //  this.getMessage();
  },
  computed: {},
  methods: {
    close() {
      document.getElementById("modalthree").style.display = "none";
    },
    getMessage() {
      if (this.XiangmuData) {
        document.getElementById("modalthree").style.display = "block";
      }
      var msg = this.XiangmuData;
      // console.log(this.XiangmuData+"aaaaaaaaaaaa");
      // console.log(msg+"bbbbbbbbbb");
      let url = "village_project_details?key=" + msg;
      // http://192.168.1.212:5000/village_project_details?key=1
      https
        .Get(url)
        .then(res => {
          var dataData = res.data.village_project_details;
          this.dataList = dataData[0];
          // console.log( this.dataList+"aaaaaaaaaaaa");

        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
.csthree {
  width: 100%;
  height: 100%;
}
/* .title{
  font-size: 20px;
} */
#modalthree {
  width: 100%;
  height: 100%;
  background-color: #ffffffd2;

  /* background-color: red; */
}
#modalthree > button{
  background-color:none;
  border:none;
  color: black;
  position: absolute;
  right: 0;
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  opacity: 0.8;
}
#modalthree > table {
  padding: 20px;
}
#modalthree > table > tr > td {
  width: 150px;
  height: 30px;
}
.echarts {
  width: 100%;
  height: 32%;
  /* border: 1px solid red; */
}
.echarts > div {
  width: 100%;
  height: 100%;
}
</style>
