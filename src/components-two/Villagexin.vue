<template>
  <div class="villagexin">
    <h3>村简介</h3>
    {{msg}}
  </div>
</template>
<script>
// import https from "../http/config.js";

export default {
  props: {
    // 接收父组件传递过来的信息
    Villagexin: {
      type: Array,
      default: () => []
      // type: String,
      // default: ""
    }
  },
  watch: {
    Villagexin(old) {
      //   console.log("change" + old);
      this.getMessage();
    }
  },
  // components: { Echartszhexiantu },
  data() {
    return {
      msg: ""
    };
  },
  created() {
    //  this.getMessage();
  },
  computed: {},
  methods: {
    getMessage() {
      this.msg = this.Villagexin[0];
      // console.log(this.Villagexin);
      //   let url = "village_project_details?key=" + msg;
      // http://192.168.1.212:5000/village_project_details?key=1
      //   https
      //     .Get(url)
      //     .then(res => {
      //       var dataData = res.data.village_project_details;
      //       this.dataList = dataData[0];
      //       console.log( this.dataList);

      //     })
      //     .catch(err => {});
    }
  }
};
</script>
<style scoped>
.villagexin {
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
</style>
