<template>
  <div class="four">
    <div class="top">
      <el-select v-model="nian" placeholder="请选择年份" @change="selectnian">
        <el-option v-for="item1 in optionsnian" :key="item1.value" :value="item1.value"></el-option>
      </el-select>
      <el-select v-model="cun" placeholder="请选择村" @change="selectcun">
        <el-option v-for="item2 in optionscun" :key="item2.id" :value="item2.value"></el-option>
      </el-select>
      <el-select v-model="person" filterable placeholder="请选择">
        <el-option v-for="item3 in optionsperson" :key="item3.id" :value="item3.village_person"></el-option>
      </el-select>
      <el-button @click="findXinxi">查询</el-button>
    </div>
    <div class="content">
      <Ceshifirst :dataListren="dataListren"></Ceshifirst>
    </div>
  </div>
</template>

<script>
import https from "../http/config.js";
import Ceshifirst from "../components-four/Ceshifirst";
import Ceshisecond from "../components-four/Ceshisecond";
export default {
  name: "Four",
  components: {
    Ceshifirst,
    Ceshisecond
  },
  data() {
    return {
      optionsnian: [
        {
          value: "2016"
        },
        {
          value: "2017"
        },
        {
          value: "2018"
        },
        {
          value: "2019"
        },
        {
          value: "2020"
        }
      ],
      optionscun: [
        {
          id: "0",
          value: "口家村",
          label: "口家村"
        },
        {
          id: "1",
          value: "周家村",
          label: "周家村"
        },
        {
          id: "2",
          value: "荒场村",
          label: "荒场村"
        },
        {
          id: "3",
          value: "里口村",
          label: "里口村"
        },
        {
          id: "4",
          value: "阴坡村",
          label: "阴坡村"
        },
        {
          id: "5",
          value: "崖窑村",
          label: "崖窑村"
        },
        {
          id: "6",
          value: "三星村",
          label: "三星村"
        },
        {
          id: "7",
          value: "焦村村",
          label: "焦村村"
        },
        {
          id: "8",
          value: "何家村",
          label: "何家村"
        },
        {
          id: "9",
          value: "盘口村",
          label: "盘口村"
        },
        {
          id: "10",
          value: "红崖湾村",
          label: "红崖湾村"
        },
        {
          id: "11",
          value: "四郎殿村",
          label: "四郎殿村"
        },
        {
          id: "12",
          value: "寨子洼村",
          label: "寨子洼村"
        },
        {
          id: "13",
          value: "七千关村",
          label: "七千关村"
        },
        {
          id: "14",
          value: "朱家沟村",
          label: "朱家沟村"
        }
      ],
      nian: "2016",
      cun: "口家村",
      person: "黄金良",
      item1: {},
      item2: {},
      item3: {},
      value: "",
      optionsperson: [],
      dataListren: []
    };
  },
  watch: {
    nian(newValue, oldValue) {
      this.getMessage();
    },
    cun(newValue, oldValue) {
      this.getMessage();
      this.person = null;
    },
    person(newValue, oldValue) {
      // this.oldValue=null;
      // this.findXinxi();
      // console.log(newValue);
      // console.log(oldValue);
    }
  },
  created() {
    this.getMessage();
    this.findXinxi();
  },
  methods: {
    selectnian(value) {
      this.item1 = this.optionsnian.find(item1 => {
        return item1.value === value;
      });
    },
    selectcun(value) {
      this.item2 = this.optionscun.find(item2 => {
        return item2.value === value;
      });
    },
    getMessage() {
      var msg1 = this.nian;
      var msg2 = this.cun;
      let url = "year_village_person?year=" + msg1 + "&village_name=" + msg2;
      https
        .Get(url)
        .then(res => {
          this.optionsperson = res.data.year_village_person;
        })
        .catch(err => {});
    },
    findXinxi() {
      var msg1 = this.nian;
      var msg2 = this.cun;
      var msg3 = this.person;
      let url =
        "year_village_person_details?year=" +
        msg1 +
        "&village_name=" +
        msg2 +
        "&name=" +
        msg3;
      https
        .Get(url)
        .then(res => {
          var dataL=res.data.year_village_person_details;
          this.dataListren = res.data.year_village_person_details;
        })
        .catch(err => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
