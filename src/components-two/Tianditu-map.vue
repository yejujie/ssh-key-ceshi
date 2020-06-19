<template>
  <div class="warpper">
    <div id="tMapDiv"></div>
  </div>
</template>
<script>
import https from "../http/config.js";
export default {
  name: "tianditu",

  props: {
    // 接收父组件传递过来的信息
    XinxiData: {
      type: String,
      default: ""
    },
    MapData: {
      type: String,
      default: ""
    }
  },
  watch: {
    XinxiData(old) {
      if (this.XinxiData == "贫困信息") {
        this.getMessageone();
      } else if (this.XinxiData == "扶贫项目") {
        this.getMessagetwo();
      }
    },
    MapData(old) {
      this.getMessagethree();
    }
  },
  data() {
    return {
      dataList1: "",
      dataList2: ""
    };
  },
  mounted: function() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      let that = this; //将方法放在mounted，会有指向问题，定义this使用就会正常
      let zoom = 12; //地图的初始化级别，及放大比例
      that.map = new T.Map("tMapDiv");
      that.map.centerAndZoom(new T.LngLat(107.399289, 35.263434), zoom);
      // var ctrl = new T.Control.MapType([
      //   // {
      //   //   title: "地图", //地图控件上所要显示的图层名称
      //   //   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png", //地图控件上所要显示的图层图标（默认图标大小80x80）
      //   //   layer: TMAP_NORMAL_MAP //地图类型对象，即MapType。
      //   // },
      //   {
      //     title: "卫星混合",
      //     icon:
      //       "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",
      //     layer: TMAP_HYBRID_MAP
      //   }
      // ]);
      that.map.addControl(TMAP_HYBRID_MAP);
    },
    getMessageone() {
      https
        .Get("township")
        .then(res => {
          let that = this;
          that.map.clearOverLays();
          var dataDc = res.data.village_latitude_and_longitude_information;
          var text = [];
          var numberpeopie = [];
          var poorpeopie = [];
          var x = [];
          var y = [];
          for (var m = 0; m < dataDc.length; m++) {
            text.push(dataDc[m].village);
            numberpeopie.push(dataDc[m].total_population + "");
            poorpeopie.push(dataDc[m].number_of_poor + "");
            x.push(dataDc[m].village_longitude);
            y.push(dataDc[m].village_latitude);
          }
          for (var j = 0; j < dataDc.length; j++) {
            var latlng1 = new T.LngLat(x[j], y[j]);
            // var latlng11 = new T.LngLat(x[j], y[j]);
            var label1 = new T.Label({
              text:
                "<div style='margin:5px 5px; '>" +
                "<div style='margin:5px 0px 5px 10px;'>村名 : " +
                text[j] +
                "<br>总人数：" +
                numberpeopie[j] +
                "</div>" +
                "</div>",
              position: latlng1,
              offset: new T.Point(-20, 0)
            });

            // var label11 = new T.Label({
            //   text: numberpeopie[j],
            //   position: latlng11,
            //   offset: new T.Point(-20, 32)
            // });
            // label11.setColor("red");

            //创建地图文本对象
            // let that = this;
            that.map.addOverLay(label1);
            // that.map.addOverLay(label11);
            // var circle1 = new T.Circle(new T.LngLat(x[j] - 0.01, y[j]), 120, {
            //   color: "red",
            //   weight: 10,
            //   opacity: 0.5,
            //   fillColor: "red",
            //   fillOpacity: 1,
            //   lineStyle: "solid"
            // });
            // that.map.addOverLay(circle1);
          }
        })
        .catch(err => {});
    },
    getMessagetwo() {
      https
        .Get("village_project_invest_funds")
        .then(res => {
          let that = this;
          that.map.clearOverLays();
          var dataDc = res.data.village_project_invest_funds;
          var text = [];
          var projectfunds = [];
          var projectcount = [];
          var x = [];
          var y = [];
          for (var m = 0; m < dataDc.length; m++) {
            text.push(dataDc[m].village_name);
            projectfunds.push(dataDc[m].project_funds + "");
            projectcount.push(dataDc[m].project_count + "");
            x.push(dataDc[m].longitude);
            y.push(dataDc[m].latitude);
          }
          for (var j = 0; j < dataDc.length; j++) {
            var latlng1 = new T.LngLat(x[j], y[j]);
            // var latlng2 = new T.LngLat(x[j], y[j]);
            // var latlng3 = new T.LngLat(x[j], y[j]);
            var label1 = new T.Label({
              text:
                "<div style='margin:5px 5px; '>" +
                "<div style='margin:5px 0px 5px 10px;'>村名 : " +
                text[j] +
                "<br>数量：" +
                projectfunds[j] +
                "<br>金额：" +
                projectcount[j] +
                "</div>" +
                "</div>",
              position: latlng1,
              offset: new T.Point(-20, 0)
            });

            // var label2 = new T.Label({
            //   text: "数量：" + projectcount[j],
            //   position: latlng2,
            //   offset: new T.Point(-20, 32)
            // });
            // var label3 = new T.Label({
            //   text: "金额：" + projectfunds[j],
            //   position: latlng3,
            //   offset: new T.Point(-20, 55)
            // });

            //创建地图文本对象
            that.map.addOverLay(label1);
            // that.map.addOverLay(label2);
            // that.map.addOverLay(label3);

            // var circle1 = new T.Circle(new T.LngLat(x[j] - 0.01, y[j]), 120, {
            //   color: "red",
            //   weight: 10,
            //   opacity: 0.5,
            //   fillColor: "red",
            //   fillOpacity: 1,
            //   lineStyle: "solid"
            // });
            // that.map.addOverLay(circle1);
          }
        })
        .catch(err => {});
    },
    getMessagethree() {
      var msg = this.MapData;
      let url = "village_project_details?key=" + msg;
      https
        .Get(url)
        .then(res => {
          var dataData = res.data.village_project_details;
          // console.log("xxxxxxxxxxxxxxxxxxxxxx", dataData[0]);
          var x = dataData[0].project_longitude;
          var y = dataData[0].project_latitude;
          let that = this;
          that.map.clearOverLays();
          let marker = new T.Marker(new T.LngLat(x, y)); // 创建标注
          that.map.addOverLay(marker); // 将标注添加到地图中
        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
.warpper {
  width: 100%;
  height: 100%;
  /* border: 10px solid red; */
}
.warpper > #tMapDiv {
  width: 100%;
  height: 100%;
  /* border: 30px solid green; */
  z-index: 0;
}
/* .warpper > #tMapDiv /deep/ .tdt-label {
  background: #fff;
  line-height: 29px;
  width: 60px;
  padding: 0 10px;
  -moz-box-shadow: 1px 1px 4px #999;
  -webkit-box-shadow: 1px 1px 4px #999;
  box-shadow: 1px 1px 4px #999;
} */
</style>
