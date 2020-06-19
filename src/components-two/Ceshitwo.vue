<template>
  <div class="cstwo">
    <div id="modaltwo">
      <button @click="close()">隐藏</button>

      <div class="table">
        <table>
          <tr>
            <td>姓名:</td>
            <!-- <td>{{dataList[0].name}}</td> -->
            <td>{{dataList1.name}}</td>
          </tr>
          <tr>
            <td>是否建档:</td>
            <td>{{dataList1.whether_to_establish_a_card_account}}</td>
          </tr>
          <tr>
            <td>健康状况:</td>
            <td>{{dataList1.health_status}}</td>
          </tr>
          <tr>
            <td>劳动技能:</td>
            <td>{{dataList1.labor_skills}}</td>
          </tr>
          <tr>
            <td>务工状况:</td>
            <td>{{dataList1.work_status}}</td>
          </tr>

           <tr>
            <td>致贫原因:</td>
            <td>{{dataList1.cause_of_poverty_one}}</td>
          </tr>

           <tr>
            <td>贫困识别时间:</td>
            <td>{{dataList1.identification_of_poor_people}}</td>
          </tr>

           <tr>
            <td>脱贫属性:</td>
            <td>{{dataList1.poverty_alleviation}}</td>
          </tr>

           <tr>
            <td>脱贫年度:</td>
            <td>{{dataList1.poverty_alleviation_year}}</td>
          </tr>
           <tr>
            <td>平均收入:</td>
            <td>{{dataList1.per_capita_net_income}}</td>
          </tr>
        </table>
      </div>

      <div class="echarts" id="echarts">
        <Echartszhexiantu :chartData="chartData"></Echartszhexiantu>
      </div>
      <el-button type="text" @click="dialogVisible = true">点击打开更多</el-button>

      <el-dialog
        title="个人信息"
        :visible.sync="dialogVisible"
        width="100%"
        top="80px"
        :modal="false"
        :before-close="handleClose"
      >
        <div class="warpper">
          <div class="box1">
            <div class="left">
              <!-- <img src="../images/images-xinxi/touxiang.gif" alt /> -->
              <!-- <img src="../images/images-xinxi/xxx.jpg" alt /> -->
              <img src="../images/images-xinxi/aaa.gif" alt />

            </div>
            <div class="right">
              <div class="title">
                <img src="../images/images-xinxi/left.gif" alt />
                户主信息
                <img src="../images/images-xinxi/right.gif" alt />
              </div>

              <div class="content">
                <ul>
                  <li>姓名：王德发</li>
                  <li>性别：男</li>
                  <li>年龄：28</li>
                  <li>联系电话：1888888888</li>
                  <li>身份证号：22222222222222</li>
                  <li>文化程度：本科</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="box2">
            <div class="title">
              <img src="../images/images-xinxi/left.gif" alt />
              家庭成员信息
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </div>
          <div class="box3">
            <div class="line">
              <img src="../images/images-body/组.png" alt />
            </div>
            <div class="table">
              <ul>
                <li>姓名</li>
                <li>与户主关系：</li>
                <li>性别：男</li>
                <li>年龄：28</li>
                <li>联系电话：1888888888</li>
                 <li>身份证号：22222222222222</li>
                <li>文化程度：本科</li>
              </ul>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// import echarts from "echarts";
import https from "../http/config.js";
import Echartszhexiantu from "../components-two/Echartszhexiantu";

export default {
  props: {
    // 接收父组件传递过来的信息
    CunmingData: {
      type: String,
      default: ""
    }
  },
  watch: {
    CunmingData(old) {
      //   console.log("change" + old);
      this.getMessage();
    }
  },
  components: { Echartszhexiantu },
  data() {
    return {
      msg: "",
      dataList1: "",
      // dataList2: "",
      chartData: [],
      dialogVisible: false
    };
  },
  created() {
    this.getMessage();
  },
  computed: {},
  methods: {
    close() {
      document.getElementById("modaltwo").style.display = "none";
      //  document.getElementById("echarts").style.display = "none";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getMessage() {
      if (this.CunmingData) {
        document.getElementById("modaltwo").style.display = "block";

        var msg = this.CunmingData;
        // console.log(this.CunmingData+"111");
        console.log(msg);
        let url = "head_of_household_information?household=" + msg;
        https
          .Get(url)
          .then(res => {
            var dataData1 = res.data.head_of_household_information;
            // console.log(dataData1);
            var arr = [];
            var arr1 = [];
            for (var i = 0; i < dataData1.length; i++) {
              if (i == dataData1.length - 1) {
                // console.log(dataData1[i]);
                // arr.push(dataData1[i]);
                this.dataList1 = dataData1[i];
              }
            }
            // console.log(this.dataList1);

            for (var j = 0; j < dataData1.length; j++) {
              arr1.push(dataData1[j].year);
              arr1.push(dataData1[j].per_capita_net_income);
              console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyy",dataData1[j].year);
              console.log("pppppppp",dataData1[j].per_capita_net_income);
            }

            // console.log(arr);
            // this.dataList = arr;
            this.chartData = arr1;
          })
          .catch(err => {});
      }
    }
  }
};
</script>
<style scoped>
.cstwo {
  width: 100%;
  height: 100%;
  /* background-color: #ffffffd2; */
}
.title {
  font-size: 20px;
}
#modaltwo {
  width: 100%;
  height: 100%;
  background-color: #ffffffd2;
}
.cstwo > #modaltwo > button {
  background-color: none;
  border: none;
  color: black;
  position: absolute;
  right: 0;
  padding: 5px 20px 5px 20px;
  font-size: 16px;
  opacity: 0.8;
}
#modaltwo > .table > table {
  padding: 20px;
}
#modaltwo > .table > table > tr > td {
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
#modaltwo /deep/ .el-dialog {
  /* background-color: #000000; */
  /* background-image: url("../images/images-xinxi/317952.jpg"); */
  background-image: url("../images/images-index/bg.png");
}

#modaltwo /deep/ .el-dialog > .el-dialog__body {
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 14px;
  word-break: break-all;
}
#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper {
  width: 60%;
  height: 100%;
  margin: 0 auto;
}
#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper > .box1 {
  position: relative;
}

#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper > .box1 > .left {
  width: 40%;
}
#modaltwo
  /deep/
  .el-dialog
  > .el-dialog__body
  > .warpper
  > .box1
  > .left
  > img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
}
#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper > .box1 > .right {
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
}
#modaltwo
  /deep/
  .el-dialog
  > .el-dialog__body
  > .warpper
  > .box1
  > .right
  > .content {
  border: 2px solid #2b8fff;
}
#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper > .box2 > .title {
  width: 200px;
  margin: 0 auto;
}
#modaltwo /deep/ .el-dialog > .el-dialog__body > .warpper > .box3>.table{
  border: 2px solid #2b8fff;
}
</style>
