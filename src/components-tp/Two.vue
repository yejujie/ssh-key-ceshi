<template>
  <div class="two">
    <div class="map">
      <!-- <Tianditumap :XinxiData="XinxiData"></Tianditumap> -->
      <Tianditumap :XinxiData="XinxiData" :MapData="MapData"></Tianditumap>
    </div>

    <div class="buttonchange">
      <el-button plain @click="open()">展开</el-button>
      <el-button plain @click="close()">隐藏</el-button>
    </div>
    <div class="caidan" id="caidan">
      <div class="caidantree">
        <el-tree
          :data="data"
          :expand-on-click-node="false"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick"
        ></el-tree>
      </div>

      <div class="caidancontent">
        <div class="ceshione" id="ceshione">
          <Ceshione id="cone" :CunData="CunData"></Ceshione>
        </div>
        <div class="ceshitwo" id="ceshitwo">
          <Ceshitwo id="ctwo" :CunmingData="CunmingData"></Ceshitwo>
        </div>

        <div class="ceshitwo" id="ceshithree">
          <Ceshithree id="cthree" :XiangmuData="XiangmuData"></Ceshithree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import https from "../http/config.js";
// import Bus from "../../js/bus.js";
import Tianditumap from "../components-two/Tianditu-map";
import Ceshione from "../components-two/Ceshione";
import Ceshitwo from "../components-two/Ceshitwo";
import Ceshithree from "../components-two/Ceshithree";

export default {
  name: "Two",
  data() {
    return {
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      CunData: "",
      XinxiData: "",
      CunmingData: "",
      XiangmuData: "",
      MapData: ""
    };
  },
  components: {
    Tianditumap,
    Ceshione,
    Ceshitwo,
    Ceshithree
  },
  created() {
    this.getDataListpreson();
  },
  mounted: {},
  methods: {
    getDataListpreson() {
      https
        .Get("village_person_project")
        .then(res => {
          var dataData1 = res.data.village_project;
          var dataData = res.data.village_person;
          // this.dataList = dataData;
          // console.log(dataData1);
          // console.log(dataData);

          var mydata1 = [
            {
              label: "精准扶贫",
              children: [
                {
                  label: "贫困信息",
                  children: []
                },
                {
                  label: "扶贫项目",
                  children: []
                },
                {
                  label: "扶贫产业",
                  children: [
                    {
                      label: "扶贫项目1"
                    },
                    {
                      label: "扶贫项目2"
                    },
                    {
                      label: "扶贫项目3"
                    }
                  ]
                }
              ]
            },
            {
              label: "智慧规划",
              children: [
                {
                  label: "用地类型",
                  children: []
                },
                {
                  label: "规划方案",
                  children: []
                }
              ]
            }
          ];

          // //第一个菜单
          // console.log(dataData);
          var arrname1 = [];
          var arrperson = [];
          var arrids = [];
          var arrids1 = [];
          for (var i = 0; i < dataData.length; i++) {
            arrname1.push(dataData[i].village_name);
            arrperson.push(dataData[i].person.split(","));
            arrids.push(dataData[i].household_number.split(","));
          }
          console.log(arrname1);

          var ret = [];
          for (var i in arrname1) {
            var item1 = arrname1;
            var tmp1 = {
              value: item1[i],
              label: item1[i],
              id: i,
              children: []
            };
            for (var j in arrperson[i]) {
              var cItem1 = arrperson[i];
              var cItem2 = arrids[i];
              tmp1.children.push({
                value: cItem1[j],
                label: cItem1[j],
                ids: cItem2[j]
              });
            }
            ret.push(tmp1);
          }
          for (var i = 0; i < ret.length; i++) {
            mydata1[0].children[0].children.push(ret[i]);
          }
          //第二个菜单
          var arrname = [];
          var arrperject = [];
          var arrkeys = [];
          var arrkeys1 = [];
          for (var i = 0; i < dataData1.length; i++) {
            arrname.push(dataData1[i].village_name);
            arrperject.push(dataData1[i].project_name.split(","));
            arrkeys.push(dataData1[i].key.split(","));
            arrkeys1.push(dataData1[i].key.split(","));
          }
          var ret1 = [];
          for (var i in arrname) {
            var item = arrname[i];
            var tmp = {
              value: item,
              label: item,
              children: []
            };
            for (var j in arrperject[i]) {
              var cItem1 = arrperject[i];
              var cItem2 = arrkeys[i];
              var cItem3 = arrkeys1[i];
              tmp.children.push({
                value: cItem1[j],
                label: cItem1[j],
                key: cItem2[j],
                key1: cItem3[j]
              });
            }
            ret1.push(tmp);
          }
          for (var i = 0; i < ret1.length; i++) {
            mydata1[0].children[1].children.push(ret1[i]);
          }
          this.data = mydata1;
          // console.log(this.data)
        })
        .catch(err => {});
    },
    open() {
      document.getElementById("caidan").style.display = "block";
    },
    close() {
      document.getElementById("caidan").style.display = "none";
    },
    handleNodeClick(data) {
      if (data.id >= 0) {
        document.getElementById("ceshione").style.display = "block";
        document.getElementById("ceshitwo").style.display = "none";
        document.getElementById("ceshithree").style.display = "none";
        this.CunData = data.label;
      } else if (data.ids >= 0) {
        document.getElementById("ceshitwo").style.display = "block";
        document.getElementById("ceshione").style.display = "none";
        document.getElementById("ceshithree").style.display = "none";
        //  console.log("111111111111111111111111111", data.ids);
        this.CunmingData = data.ids;
      } else if (data.label == "贫困信息") {
        this.XinxiData = data.label;
      } else if (data.label == "扶贫项目") {
        this.XinxiData = data.label;
      } else if (data.key >= 0) {
        // console.log("扶贫项目", data.key);
        document.getElementById("ceshithree").style.display = "block";
        document.getElementById("ceshione").style.display = "none";
        document.getElementById("ceshitwo").style.display = "none";
        this.XiangmuData = data.key;
        this.MapData = data.key1;
        // console.log("111111111111111111111111111", data.key);
      }
      // else if (data.key == "34") {
      //   window.open("http://192.100.111.47:8090/Demo/", "_blank");
      // }
      else {
        // console.log("111111111111111111111111111", data.label);
      }
    }
  },
  watch: {},
  mounted() {}
};
</script>
<style scoped>
@import url("../style/reset.css");
.two {
  width: 100%;
  height: 100%;
  position: relative;
}

.two > .map {
  width: 100%;
  height: 100%;
}
.two > .map > div {
  width: 100%;
  height: 100%;
}
.two > .buttonchange {
  position: absolute;
  width: 20%;
  height: 30px;
  line-height: 30px;
  top: 0;
  left: 20px;
  border: 1px solid black;
  box-sizing: border-box;
}
.two > .buttonchange /deep/ body[data-v-19d2c827],
th[data-v-19d2c827],
td[data-v-19d2c827],
input[data-v-19d2c827],
select[data-v-19d2c827],
textarea[data-v-19d2c827],
button[data-v-19d2c827] {
  font-size: 18px;
  line-height: 1;
  padding: 0 20px 0 20px;
  margin-left: 20px;
  font-family: "\5FAE\8F6F\96C5\9ED1", "\9ED1\4F53", "\5B8B\4F53";
  color: #000000;
  background-color: #ffffff;
}
.two > #caidan {
  width: 50%;
  height: 100%;
  border-bottom: none;
  box-sizing: border-box;
}
.two > .caidan > .caidantree {
  position: absolute;
  top: 30px;
  left: 20px;
  overflow-y: auto;
  overflow-x: scroll;
  height: 100%;
  width: 15%;
}
.two > .caidan > .caidantree /deep/ .el-tree {
  /* position: relative; */
  cursor: default;
  background-color: #ffffffd2;
  color: black;
}

.two > .caidan > .caidantree[data-v-19d2c827] /deep/ .el-tree {
  cursor: default;
  background-color: #ffffffd2;
  color: black;
}

.two > .caidan > .caidancontent {
  position: absolute;
  width: 25%;
  height: calc(100%);
  top: 0;
  right: 20px;
}
#ceshione,
#ceshitwo,
#ceshithree {
  width: 100%;
  height: 100%;
  display: none;
}

#ceshione > div,
#ceshitwo > div,
#ceshithree > div {
  width: 100%;
  height: 100%;
}
</style>