<template>
  <div style="overflow-x:hidden">
    <!-- 头部组件 -->
    <mt-header fixed title="我的商城哇" style="position:absolute"></mt-header>

    <!-- 中间部分路由组件 -->
    <div class="middenPart">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab" style="position:fixed;">
      <router-link to="/home" tag="a" class="my-tab-item">
        <!-- <a class="mui-tab-item mui-active" href="#tabbar"> 原来MUI的组件结构-->
        <span class="el-icon-s-flag"></span>
        <br />
        <span style="font-Size:12px">首页</span>
        <!-- </a> -->
      </router-link>
      <router-link to="/vip" tag="a" class="my-tab-item" href="#tabbar-with-chat">
        <span class="el-icon-star-on"></span>
        <br />
        <span style="font-Size:12px">会员</span>
      </router-link>
      <router-link to="/shopCar" tag="a" class="my-tab-item" href="#tabbar-with-contact">
        <!-- <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>-->
        <el-badge :value="0" class="item">
          <span class="el-icon-shopping-cart-2"></span>
          <br />
          <span style="font-Size:12px">购物车</span>
        </el-badge>
      </router-link>
      <router-link to="/search" tag="a" class="my-tab-item" href="#tabbar-with-map">
        <!-- <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>-->
        <span class="el-icon-search"></span>
        <br />
        <span style="font-Size:12px">搜索</span>
      </router-link>
    </nav>

    <div
      id="goBackButton"
      v-show="this.$route.path !='/home'&&this.$route.path !='/vip'&&this.$route.path !='/shopCar'&&this.$route.path !='/search'"
      ref="myButton"
    >
      <input :class="{'goBackButton':isShow}" type="button" value="<" @click="goBack" />
    </div>
  </div>
</template>

<script>
// import func from '../vue-temp/vue-editor-bridge'; !!!!!func语法提示引入的鬼代码

import Vue from "../node_modules/vue/dist/vue.js"; //导入vue

import "./lib/mui/css/mui.css"; //导入MUI
import "./lib/mui/css/icons-extra.css"; //导入MUI的图标文件

setTimeout(() => {
  var myButton = document.getElementById("goBackButton");
  document.getElementsByClassName("mint-header")[0].append(myButton);
  const template = {
    template: "#goBackButton"
  };
  // const render = Vue.compile(template).render;
  // document.getElementsByClassName("mint-header")[0].append(render);
}, 100);


import store from './Vuex/store'

export default {
  store,
  data: function() {
    return {
      // showGoBackButton:this.$route.query.showGoBackButton,
      isShow: true
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // console.log(this)
    // const template = `    <template id="goBackButton" v-show="this.$route.path !='/home'" ref="myButton">
    //   <input :class="{'goBackButton':isShow}" type="button" value="<" @click="goBack" />
    // </template>`;
    // console.log(template);
    // const render = this.compile(template).render;
    // document.getElementsByClassName("mint-header")[0].append(render);
    // this.$parent.$compile(template); // 在父级上下文编译组件
    // this.$el.appendChild(cell); // 将编译后的html插入当前组件
    console.log("打印this对象~~~~~~~~~~~");
    console.log(this);
  }
};
</script>

<style scoped>
.middenPart {
  padding-top: 40px;
  padding-bottom: 50px;
}
.highLight {
  color: red !important;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.mui-bar-tab .my-tab-item .mui-active {
  color: red;
}
.mui-bar-tab .my-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .my-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goBackButton {
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 1rem;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
}
</style>
<style >
.el-badge__content.is-fixed{
  top: 5px !important;
}
</style>

