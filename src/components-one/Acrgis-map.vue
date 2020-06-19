<template>
  <div class="acrgis-map">
    <div id="viewDiv"></div>
  </div>
</template>
<script>
import https from "../http/config.js";
const basicMapUrl =
  "http://192.100.111.47:6080/arcgis/rest/services//taiping/MapServer";
const options = {
  version: "3.9"
};
import esriLoader from "esri-loader";
export default {
  name: "Acrgismap",
  data() {
    return {
      map: null,
      mapview: null,
      extent: null,
      mapInitOver: null,
      baseLayer: null,
      vegeDistriLayer: null,
      circlePoLayer: null,
      date: ""
    };
  },
  mounted() {
    this.createMap();
  },
  watch: {
    dataDc() {
      this.createMap();
    }
  },
  methods: {
    createMap: function() {
      let vm = this;
      esriLoader
        .loadModules(
          [
            "esri/map",
            "esri/layers/ArcGISDynamicMapServiceLayer",
            "dojo/domReady!"
          ],
          options
        )
        .then(
          ([Map, ArcGISDynamicMapServiceLayer]) => {
            vm.extent = new esri.geometry.Extent({
              xmax: 107.525289,
              xmin: 107.251289,
              ymax: 35.333434,
              ymin: 35.213434,
              spatialReference: {
                wkid: 4326
              }
            });
            vm.map = new esri.Map("viewDiv", {
              slider: false, //隐藏放大缩小按钮
              extent: vm.extent,
              showLabels: true,
              logo: false,
              zoom: 15
              // center: [100.5214845, 37.694768]
            });
            vm.baseLayer = new esri.layers.ArcGISDynamicMapServiceLayer(
              basicMapUrl,
              {
                id: "baseMapLayer_0"
              }
            );
            vm.map.addLayer(vm.baseLayer);

            this.$options.methods.loadDian(vm);
          },
          reason => {
            console.log(reason);
          }
        );
    },
    loadDian: function(vm) {
      esriLoader
        .loadModules(
          [
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleFillSymbol",
            "dojo/colors",
            "esri/geometry/Circle",
            "esri/graphic",
            "esri/layers/GraphicsLayer",
            "esri/geometry/Point",
            "esri/symbols/TextSymbol",
            "esri/units",
            "esri/symbols/Font"
          ],
          options
        )
        .then(
          ([
            SimpleLineSymbol,
            SimpleFillSymbol,
            Color,
            Circle,
            Graphic,
            GraphicsLayer,
            Point,
            TextSymbol,
            Units,
            Font
          ]) => {
            function getDatadc() {
              var circleGeometry;
              if (vm.circlePoLayer) {
                vm.map.removeLayer(vm.circlePoLayer);
              }
              vm.circlePoLayer = new GraphicsLayer({
                id: "circlePoLayer_num_0"
              });
              https
                .Get("township")
                .then(res => {
                  var dataDc =
                    res.data.village_latitude_and_longitude_information;
                  console.log(dataDc);
                  var numberpeopie = [];
                  var poorpeopie = [];
                  var text = [];
                  var x = [];
                  var y=[];
                  for (var i = 0; i < dataDc.length; i++) {
                    text.push(dataDc[i].village);
                    x.push(dataDc[i].village_longitude);
                    y.push(dataDc[i].village_latitude);

                    numberpeopie.push(dataDc[i].total_population);
                    poorpeopie.push(dataDc[i].number_of_poor);
                  }
                
                  // console.log([x,y]);
                  // 村信息
                    for (var j = 0; j <  dataDc.length; j++) {
                      var textSym = new TextSymbol(text[j])
                        .setColor(new Color([255, 255, 255]))
                        .setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD));
                      var symbol = new SimpleFillSymbol(
                        SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([255, 0, 0]),
                          2
                        ),
                        new Color([255, 255, 255, 1])
                      );
                      // console.log(textSym);
                      var point = new Point([x[j],y[j]]);
                      // console.log([x[j], y[j]]);
                      circleGeometry = new Circle(point, {
                        radius: 50
                        // radiusUnit: Units.KILOMETERS
                      });

                      var graphic = new Graphic(circleGeometry, symbol);
                      var graphic1 = new Graphic(point, textSym);
                      vm.circlePoLayer.add(graphic);
                      vm.circlePoLayer.add(graphic1);
                      vm.map.addLayer(vm.circlePoLayer);
                    // }
                  }
                  // 村总人口数
                  for (var j = 0; j <  dataDc.length; j++) {
                      var textSym = new TextSymbol(numberpeopie[j])
                        .setColor(new Color([0, 0, 0]))
                        .setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD));
                      var symbol = new SimpleFillSymbol(
                        SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([243, 234, 43]),
                          2
                        ),
                        new Color([250, 250, 0, 1])
                      );
                      // console.log(textSym);
                      var point = new Point([x[j]-0.005,y[j]-0.007]);
                      // console.log([x[j], y[j]]);
                      circleGeometry = new Circle(point, {
                        radius: 600
                        // radiusUnit: Units.KILOMETERS
                      });

                      var graphic = new Graphic(circleGeometry, symbol);
                      var graphic1 = new Graphic(point, textSym);
                      vm.circlePoLayer.add(graphic);
                      vm.circlePoLayer.add(graphic1);
                      vm.map.addLayer(vm.circlePoLayer);
                    // }
                  }
                  // 村贫困人口数
                  for (var j = 0; j <  dataDc.length; j++) {
                      var textSym = new TextSymbol(poorpeopie[j])
                        .setColor(new Color([255, 255, 255]))
                        .setFont(new Font("10pt").setWeight(Font.WEIGHT_BOLD));
                      var symbol = new SimpleFillSymbol(
                        SimpleFillSymbol.STYLE_SOLID,
                        new SimpleLineSymbol(
                          SimpleLineSymbol.STYLE_SOLID,
                          new Color([255, 0, 0]),
                          2
                        ),
                        new Color([255, 0, 0, 1])
                      );
                      // console.log(textSym);
                      var point = new Point([x[j]+0.005,y[j]-0.005]);
                      // console.log([x[j], y[j]]);
                      circleGeometry = new Circle(point, {
                        radius: 400
                        // radiusUnit: Units.KILOMETERS
                      });

                      var graphic = new Graphic(circleGeometry, symbol);
                      var graphic1 = new Graphic(point, textSym);
                      vm.circlePoLayer.add(graphic);
                      vm.circlePoLayer.add(graphic1);
                      vm.map.addLayer(vm.circlePoLayer);
                    // }
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }
            getDatadc();
            // setInterval(() => {
            //   getDatadc();
            // }, 18 * 60 * 1000);
          }
        );
    }
  }
};
</script>

<style scoped>
.acrgis {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#viewDiv {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
