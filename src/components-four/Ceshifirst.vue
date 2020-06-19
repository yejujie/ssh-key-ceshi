<template>
  <div class="ceshifirst">
    <div class="warpper">
      <button @click="send">导出</button>
      <div class="table">
        <tr>
          <td colspan="8">
            <div class="biaoti">
              <img src="../images/images-xinxi/left.gif" alt />
              <b>基础信息</b>
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <b>姓名</b>
          </td>
          <td colspan="2">{{dataList.name}}</td>
          <td colspan="2">
            <b>是否为户主</b>
          </td>
          <td colspan="2">{{dataList.is_household}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <b>民族</b>
          </td>
          <td colspan="2">{{dataList.celebrities}}</td>
          <td colspan="2">
            <b>文化程度</b>
          </td>
          <td colspan="2">{{dataList.education}}</td>
        </tr>
        <tr>
          <td>
            <b>身份证件号码</b>
          </td>
          <td colspan="3">{{dataList.id_number}}</td>
          <td>
            <b>电话号码</b>
          </td>
          <td colspan="3">{{dataList.contact_number}}</td>
        </tr>
        <tr>
          <td>
            <b>个人编号</b>
          </td>
          <td colspan="3">{{dataList.person_number}}</td>
          <td>
            <b>户编号</b>
          </td>
          <td colspan="3">{{dataList.household_number}}</td>
        </tr>
        <tr>
          <td>
            <b>县(市、区、旗)</b>
          </td>
          <td>{{dataList.country}}</td>
          <td>
            <b>乡(镇)</b>
          </td>
          <td>{{dataList.township}}</td>
          <td>
            <b>行政村</b>
          </td>
          <td>{{dataList.administrative_village}}</td>
          <td>
            <b>自然村</b>
          </td>
          <td>{{dataList.natural_village}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <b>在校生状况</b>
          </td>
          <td colspan="1">{{dataList.student_status}}</td>
          <td colspan="2">
            <b>健康状况</b>
          </td>
          <td colspan="1">{{dataList.health_status}}</td>
          <td colspan="1">
            <b>家庭人数</b>
          </td>
          <td colspan="1">{{dataList.number_of_people}}</td>
        </tr>
        <tr>
          <td colspan="8">
            <div class="biaoti">
              <img src="../images/images-xinxi/left.gif" alt />
              <b>劳动信息</b>
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <b>劳动技能</b>
          </td>
          <td colspan="2">{{dataList.labor_skills}}</td>
          <td colspan="2">
            <b>务工状况</b>
          </td>
          <td colspan="2">{{dataList.work_status}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <b>务工时间（月）</b>
          </td>
          <td colspan="2">{{dataList.work_hours}}</td>
          <td colspan="2">
            <b>人均纯收入</b>
          </td>
          <td colspan="2">{{dataList.per_capita_net_income}}</td>
        </tr>
        <tr>
          <td colspan="8">
            <div class="biaoti">
              <img src="../images/images-xinxi/left.gif" alt />
              <b>扶贫信息</b>
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <b>脱贫属性</b>
          </td>
          <td colspan="2">{{dataList.poverty_alleviation}}</td>
          <td>
            <b>致贫原因</b>
          </td>
          <td colspan="2">{{dataList.cause_of_poverty_one}}</td>
          <td>
            <b>扶贫状态</b>
          </td>
          <td>{{dataList.out_of_poverty}}</td>
        </tr>
        <tr>
          <td>
            <b>就业扶贫</b>
          </td>
          <td colspan="2">{{dataList.employment_poverty_alleviation}}</td>
          <td>
            <b>产业扶贫</b>
          </td>
          <td colspan="2">{{dataList.industrial_poverty_alleviation}}</td>
          <td>
            <b>脱贫年度</b>
          </td>
          <td>{{dataList.poverty_alleviation_year}}</td>
        </tr>
        <tr>
          <td>
            <b>返贫风险1</b>
          </td>
          <td colspan="2">{{dataList.risk_of_poverty_one}}</td>
          <td>
            <b>返贫风险2</b>
          </td>
          <td colspan="2">{{dataList.risk_of_poverty_two}}</td>
          <td>
            <b>返贫风险3</b>
          </td>
          <td>{{dataList.risk_of_poverty_three}}</td>
        </tr>
        <tr>
          <td colspan="8">
            <div class="biaoti">
              <img src="../images/images-xinxi/left.gif" alt />
              <b>享受政策</b>
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <b>参加大病医疗</b>
          </td>
          <td>{{dataList.participate_in_critical_illness_medical_treatment}}</td>
          <td colspan="2">
            <b>是否解决安全饮用水</b>
          </td>
          <td>{{dataList.whether_to_solve_safe_drinking_water}}</td>
          <td>
            <b>危房户</b>
          </td>
          <td>{{dataList.dangerous_house}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <b>异地搬迁扶贫入住日期</b>
          </td>
          <td colspan="2">{{dataList.date_of_relocation_for_poverty_alleviation}}</td>
          <td colspan="2">
            <b>享受搬迁人数</b>
          </td>
          <td colspan="2">{{dataList.enjoy_the_number_of_people_moved}}</td>
        </tr>
        <tr>
          <td colspan="8">
            <div class="biaoti">
              <img src="../images/images-xinxi/left.gif" alt />
              <b>其余信息</b>
              <img src="../images/images-xinxi/right.gif" alt />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <b>首次识别时间</b>
          </td>
          <td colspan="2">{{dataList.first_recogintion_time}}</td>
          <td colspan="2">
            <b>贫困人员识别时间</b>
          </td>
          <td colspan="2">{{dataList.identification_of_poor_people}}</td>
        </tr>
        <tr>
          <td colspan="2">
            <b>识别年度</b>
          </td>
          <td colspan="2">{{dataList.identify_the_year}}</td>
          <td colspan="2">
            <b>年份</b>
          </td>
          <td colspan="2">{{dataList.year}}</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "../js/table.js";
export default {
  name: "Ceshifirst",
  props: {
    // 接收父组件传递过来的信息
    dataListren: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataList: {}
    };
  },
  watch: {
    dataListren(newVal) {
      this.drawLine();
    }
  },
  created() {},
  methods: {
    drawLine() {
      // console.log(this.dataListren[0]);
      if (this.dataListren[0] == null) {
        alert("暂无数据");
      } else {
        this.dataList = this.dataListren[0];
      }
    },
    send() {
      $(".table").table2excel({
        filename: this.dataListren[0].name, //导出的文件名
        exclude_img: true,
        exclude_links: true,
        exclude_inputs: true
      });
    }
  }
};
</script>

<style scoped>
.ceshifirst {
  position: fixed;
  width: 100%;
  height: 100%;
  /* overflow-y: scroll; */
  background-color: #ffffff;
}
.warpper {
  margin: 0 auto;
  width: 60%;
  height: 100%;
  /* background-color: #a5a5a5; */
  text-align: center;
}

.warpper > .table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  font-size: 16px;
  border: 1px solid black;
}
.warpper > .table > tr {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.warpper > .table > tr > td {
  width: 10%;
  height: 40px;
  line-height: 40px;
  border: 1px solid black;
}
</style>
