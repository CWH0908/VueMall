<template>
  <div>
    <!-- 头部组件 -->
    <mt-header fixed title="我的商城哇" style="position:absolute"></mt-header>

    <!-- 中间部分路由组件 -->
    <div class="middenPart">
      <transition>
        <router-view></router-view>
      </transition>
    </div>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab" style="position:absolute">
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
  transition: all .5s;
}
</style>

