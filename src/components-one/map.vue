<template>
  <div id="tMapDiv"></div>
</template>
<script>
import https from "../http/config.js";
export default {
  name: "tianditu",
  props: {
    // 接收父组件传递过来的信息
    mapData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {
    mapData(newVal) {
      this.loadMap();
    }
  },
  methods: {
    loadMap() {
      //  console.log(this.mapData);
      var map = new T.Map("tMapDiv");
      map.centerAndZoom(new T.LngLat(107.399289, 35.263434), 12);
      //向地图上添加文字

      var dataDc = this.mapData;
      // console.log(dataDc);
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
          text:   "<div style='margin:5px 5px; '>" +
                "<div style='margin:5px 0px 5px 10px;'>村名 : " +
                text[j] +
                "<br>贫困人数：" +
                poorpeopie[j] +
                "</div>" +
                "</div>",
          position: latlng1,
          offset: new T.Point(-20, 0)
        });
        // var label11 = new T.Label({
        //   text: poorpeopie[j],
        //   position: latlng11,
        //   offset: new T.Point(-20, 30)
        // });
        //创建地图文本对象
        map.addOverLay(label1);
        // map.addOverLay(label11);
        var circle1 = new T.Circle(new T.LngLat(x[j] - 0.01, y[j]), 120, {
          color: "red",
          weight: 10,
          opacity: 0.5,
          fillColor: "red",
          fillOpacity: 1,
          lineStyle: "solid"
        });
        map.addOverLay(circle1);
      }

      //向地图上添加切换按钮
      // var ctrl = new T.Control.MapType([
      //   {
      //     title: "卫星混合",
      //     icon:
      //       "http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png",
      //     layer: TMAP_HYBRID_MAP
      //   }
      //   //  {
      //   //   title: "地图", //地图控件上所要显示的图层名称
      //   //   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png", //地图控件上所要显示的图层图标（默认图标大小80x80）
      //   //   layer: TMAP_NORMAL_MAP //地图类型对象，即MapType。
      //   // },
      // ]);
      // map.addControl(ctrl);
	  map.addControl(TMAP_HYBRID_MAP);
    }
  }
};
</script>
<style scoped>
#tMapDiv {
  width: 100%;
  height: 100%;
}
/* #tMapDiv[data-v-6cfefc15] /deep/ .tdt-label {
  background: #95d0e0;
  line-height: 29px;
  width: 50px;
  padding: 0 10px;
  box-shadow: none;
} */


/* #tMapDiv /deep/ .tdt-label,
.tdt-label0,
.tdt-label1 {
  border: 1px solid #95d0e0;
  color: #072a77;
  z-index: 500;
  font-size: 14px;
  white-space: nowrap;
  position: absolute;
} */

/* #tMapDiv /deep/ .tdt-label {
  background: none;
  line-height: 29px; 
   padding: 0 10px;
 -moz-box-shadow: 1px 1px 4px #999;
    -webkit-box-shadow: 1px 1px 4px #999;
  box-shadow: none;
}
#tMapDiv /deep/ .tdt-label,
.tdt-label0,
.tdt-label1 {
  border: none;
  color: #ffffff;
  z-index: 500;
  font-size: 18px;
  white-space: nowrap;
  position: absolute;
} */
</style>
