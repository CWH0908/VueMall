<template>
  <div>
    <h4>展示用的组件</h4>
    <p>*********** </p>
    <p>展示 vuex 中的store数据对象 {{$store.state.city}}</p>
    <el-image :src="url" :preview-src-list="srcList"></el-image>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePreview } from "vant";

import store from '../Vuex/store'


Vue.use(ImagePreview);

export default {
  mounted(){
    console.log("打印$store");
    // console.log(this.$store);
  },
  data() {
    return {
      url: "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
      srcList: [
        "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  store
};
</script>

<style>
</style>