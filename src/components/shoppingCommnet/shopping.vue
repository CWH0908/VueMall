<template>
  <div>
    <div class="eachItem" v-for="item in thingsInfo" :key="item.id">
      <img :src="item.url" />
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
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      thingsInfo: [
        {
          id: 1,
          url: "../../images/girl.jpg",
          title: "9新款潮牛油果绿t恤心机上衣夏设计感衣服",
          price_now: "68.9",
          price_old: "120.0",
          hadSell: "12000"
        },
        {
          id: 2,
          url: "../../images/kobe.jpg",
          title: "KOBE战靴，曼巴11代",
          price_now: "4599.0",
          price_old: "6680.0",
          hadSell: "800"
        }
      ]
    };
  }
};
</script>

<style scoped>
.eachItem {
  position: relative;
  width: 40%;
  height: 140px;
  margin: 6px;
  box-shadow: 0 0 6px gray;
  box-sizing: border-box;
  display: inline-block;
}
img {
    width: 100%;
    display: block;
    height:140px;
}
.title {
  font-size: 12px;
  font-weight: 800;
  color: black;
}
.info {
  background-color: darkgrey;
  font-size: 12px;
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
.hadSell{
    float: right;
}
</style>
