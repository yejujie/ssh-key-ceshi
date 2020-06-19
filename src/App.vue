<template>
  <div class="app">
    <div class="nav">
      <ul>
        <li :class="{current:currentRoute=='/'}">
          <img src="../src/images/images-index/btn_bg_l.png" alt />
          <router-link to="/">
            <p>太平镇概况</p>
          </router-link>
        </li>
        <li :class="{current:currentRoute=='/two'}">
         <img src="../src/images/images-index/btn_bg_l.png" alt />
            <router-link to='/two'> <p>精准扶贫</p></router-link>
          </li>
        <li>
          <!-- <el-button @click="currentRouteone">跳转到页面three </el-button> -->
         <img src="../src/images/images-index/biaoti_bg.png" alt />
          <h1>智慧太平大数据平台</h1>
        </li>
        <li :class="{current:currentRoute=='/three'}">
          <img src="../src/images/images-index/btn2_bg_l.png" alt />
          <router-link to="/three">
            <p>务工人员管理</p>
          </router-link>
        </li>
        <li :class="{current:currentRoute=='/four'}">
          <img src="../src/images/images-index/btn2_bg_l.png" alt />
          <router-link to="/four">
            <p>智慧政务</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      currentRoute: "/one"
    };
  },
  watch: {
    $route: function(to, from) {
      this.currentRoute = to.path;
    }
  },
  methods:{
    currentRouteone(){
      this.$router.push("/three");
    }
  }
};
</script>

<style scoped>
@import "style/reset.css";
.app {
  position:fixed;
  left: 0;
  top:0;
  width: 100%;
  min-width: 1000px;
  height: 100%;
  background-image: url('../src/images/images-index/bg.png');
}
.nav {
  width: 100%;
  height: 80px;
}
.nav > ul::after{
  display: none;
  content: '';
  clear: both;
}
.nav > ul > li {
  float: left;
  width: 10%;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
}
.nav > ul > li:nth-child(1) > img,
.nav > ul > li:nth-child(2) > img,
.nav > ul > li:nth-child(4) > img,
.nav > ul > li:nth-child(5) > img {
  width: 100%;
  height: 40px;
  margin-top: 20px;

}

.nav > ul > li:nth-child(1) > :nth-child(2),
.nav > ul > li:nth-child(2) > :nth-child(2),
.nav > ul > li:nth-child(4) > :nth-child(2),
.nav > ul > li:nth-child(5) > :nth-child(2) {

  position: absolute;
  top: 28px;
  left:calc(50% - 30px);
  color: #ffffff;
}

.nav > ul > li:nth-child(3) {
  width: 60%;
  position: relative;
}
.nav > ul > li:nth-child(3) > img {
  width: 100%;
  height: 100%;
}
.nav > ul > li:nth-child(3) > h1 {
  position: absolute;
  top: 18px;
  left: calc(50% - 176px);
  color: #ffffff;
}

.wrapper {
  width: 100%;
  height: calc(100% - 80px);
  box-sizing: border-box;
}
</style>
