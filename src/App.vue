<template>
  <div>
    <!-- 头部组件 -->
    <mt-header fixed title="我的商城哇"></mt-header>

    <!-- 中间部分路由组件 -->
    <div class="middenPart">
      <router-view></router-view>
    </div>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" tag="a" class="mui-tab-item">
        <!-- <a class="mui-tab-item mui-active" href="#tabbar"> 原来MUI的组件结构-->
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
        <!-- </a> -->
      </router-link>
      <router-link to="/vip" tag="a" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopCar" tag="a" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" tag="a" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.middenPart {
  padding-top: 40px;
}
.highLight {
  color: red;
}
</style>

