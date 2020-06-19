<template>
  <div class="csone">
    <div id="modalone">
      <button @click="close()" >隐藏</button>
      <div class="title">
        <h2>{{msg}}</h2>
      </div>
      <div class="one">
        <!-- <Echartszhu ref="zhutu" :chartData="chartData1"></Echartszhu> -->
        <Villagexin :Villagexin="Villagexin"></Villagexin>
      
      </div>
      <div class="two">
        <Echartszhu ref="zhutu" :chartData="chartData1"></Echartszhu>

        <!-- <Echartsbing ref="bingtu" :chartData="chartData2"></Echartsbing> -->
      </div>
      <div class="three">
        <Echartszhe ref="zhetu" :chartData="chartData3"></Echartszhe>
      </div>
    </div>
  </div>
</template>
<script>
import https from "../http/config.js";
import Villagexin from "../components-two/Villagexin"
// import Echartsbing from "../components-two/Echartsbing";
import Echartszhu from "../components-two/Echartszhu";
import Echartszhe from "../components-two/Echartszhe";
export default {
  props: {
    // 接收父组件传递过来的信息
    CunData: {
      type: String,
      default: ""
    }
  },
  components: {
    // Echartsbing,
    Echartszhu,
    Echartszhe,
    Villagexin
  },
  data() {
    return {
      msg: "",
      chartData1: [],
      // chartData2: [],
      chartData3: [],
      Villagexin:[],
    };
  },
  watch: {
    CunData(val) {
      //   console.log("change" + val);
      this.getMessage();
    }
  },
  created() {
    this.getMessage();
  },
  computed: {},
  methods: {
    close() {
      document.getElementById("modalone").style.display = "none";
    },
    getMessage() {
      if (this.CunData) {
        document.getElementById("modalone").style.display = "block";
        var msg = this.CunData;
        // console.log(msg);
        this.msg = msg;
        let url = "village_information?village_name=" + msg;
        https
          .Get(url)
          .then(res => {
            var dataData1 = res.data.village_information;
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < dataData1.length; i++) {
              // console.log(dataData1[i]);
              if (i == dataData1.length - 1) {
                arr1.push(dataData1[i].labor_force + "");
                arr1.push(dataData1[i].number_of_rural_foreign_workers + "");
                arr1.push(dataData1[i].minority_population + "");
                arr1.push(
                  dataData1[i].number_of_people_in_extreme_poverty + ""
                );
                arr1.push(
                  dataData1[i].population_with_minimum_living_allowance + ""
                );
                arr1.push(dataData1[i].number_of_poor + "");
                arr1.push(dataData1[i].total_population + "");
              }
            }
            for (var i = 0; i < dataData1.length; i++) {
              // console.log(dataData1[i]);
              if (i == dataData1.length - 1) {
                arr2.push(dataData1[i].number_of_poor);
                // arr2.push(
                //   dataData1[i].population_with_minimum_living_allowance + ""
                // );
                // arr2.push(
                //   dataData1[i].number_of_people_in_extreme_poverty + ""
                // );
                // arr2.push(dataData1[i].minority_population + "");
                // arr2.push(dataData1[i].number_of_rural_foreign_workers + "");
                // arr2.push(dataData1[i].labor_force + "");
              }
            }
            for (var i = 0; i < dataData1.length; i++) {
              // console.log(dataData1[i]);
              arr3.push(dataData1[i].year + "");
              arr3.push(dataData1[i].number_of_poor + "");
            }
            this.chartData1 = arr1;
            this.Villagexin = arr2;
            this.chartData3 = arr3;

            //   this.$refs.bingtu.parentReview1();
            //   this.$refs.zhutu.parentReview2();
            //   this.$refs.zhetu.parentReview3();
          })
          .catch(err => {});
      }
    }
  }
};
</script>
<style scoped>
@import url("../style/reset.css");
.csone {
  width: 100%;
  height: 100%;
  /* opacity: 0.8; */
  /* position: fixed; */
}
#modalone {
  /* box-sizing: border-box; */
  width: 100%;
  height: 100%;
  /* border: 2px solid #2b8fff; */
  background-color: #ffffffd2;

  /* background-image: url("../images/images-index/bg.png"); */
}
#modalone > .title {
  width: 100%;
  height: 4%;
  text-align: center;
  /* border: 1px solid red; */
}
#modalone > button{
  background-color:none;
  border:none;
  color: black;
  position: absolute;
  right: 0;
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  opacity: 0.8;
}
#modalone > .one {
  width: 100%;
  height: 30%;
  /* border: 1px solid red; */
}
#modalone > .one > div {
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
}
#modalone > .two {
  width: 100%;
  height: 30%;
  /* border: 1px solid red; */
}
#modalone > .two > div {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
#modalone > .three {
  width: 100%;
  height: 30%;
  /* border: 1px solid red; */
}
#modalone > .three > div {
  width: 100%;
  height: 100%;
  /* background-color: green; */
}
</style>
