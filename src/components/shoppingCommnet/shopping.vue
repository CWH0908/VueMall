<template>
  <div class="container">
    <router-link
      tag="div"
      :to="{name:'goodsInfo',query:{index},params:{index}}"
      class="eachItem"
      v-for="(item,index) in thingsInfo"
      :key="index"
    >
      <img v-lazy="item.url" :src="item.url" />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <div class="price">
          <span class="newPrice">￥ {{item.price_now}}</span>
          <span class="oldPrice">￥ {{item.price_old}}</span>
        </div>
        <div class="sell">
          热卖中
          <span class="hadSell">已售出 {{item.hadSell}} 件</span>
        </div>
      </div>
    </router-link>

    <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
import Vue from "vue"; //引入vue
import axios from "axios"; // 引入 axios

// mint-ui的懒加载指令
// import { Lazyload } from "mint-ui";
// Vue.use(Lazyload,{
//   loading:'../../../images/girl.jpg'
// });

export default {
  mounted() {
    this.requireData();
  },
  data: function() {
    return {
      getThingsInfo:[],
      thingsInfo: "",
      topStatus: ""
    };
  },
  methods: {
    getMore() {
      // debugger
      this.openFullScreen();
      for (let item in this.getThingsInfo) {
        this.thingsInfo.push(this.getThingsInfo[item]);
      }
    },
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "my-loading-class"
      });
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
    requireData() {
      axios
        .get(
          "https://mockapi.eolinker.com/4VLgjtce15e8728b855c5b280bf96334eca5ff672228fed/cwh",
          {
            params: {
              whichOp: "thingsInfo"
            }
          }
        )
        .then(response => {
          //成功的回调
          this.thingsInfo = response.data;
          this.getThingsInfo = response.data;
          console.log(this.thingsInfo);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
}
.eachItem {
  position: relative;
  width: 46%;
  margin: 6px;
  box-shadow: 0 0 8px gray;
  box-sizing: border-box;
  display: inline-block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
img {
  width: 100%;
  display: block;
  height: 140px;
}
.title {
  font-size: 12px;
  font-weight: 800;
  color: black;
  /* min-height: 32px; */
  margin: 0;
  padding: 4px 0;
}
.info {
  background-color: Silver;
  font-size: 12px;
  margin: 1px;
}
.price {
}
.newPrice {
  font-size: 14px;
  color: red;
}
.oldPrice {
  font-size: 12px;
  color: gray;
  text-decoration: line-through;
}
.sell {
  color: gray;
}
.hadSell {
  float: right;
}

image[lazy="loading"] {
  display: block;
  width: 40px;
  height: 40px;
  margin:0 auto;
}
</style>
