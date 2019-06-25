<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li v-for="item in menuList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-home" :class="item.icon"></span>
            <div class="mui-media-body">{{item.data}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      menuList:[
        {id:1,data:"新闻资讯",icon:"mui-icon-extra mui-icon-extra-new"},
        {id:2,data:"图片分享",icon:"mui-icon-extra mui-icon-extra-share"},
        {id:4,data:"商品购买",icon:"mui-icon-extra mui-icon-extra-prech"},
        {id:5,data:"留言反馈",icon:"mui-icon mui-icon-chat"},
        {id:5,data:"视频专区",icon:"mui-icon mui-icon-eye"},
        {id:6,data:"联系我们",icon:"mui-icon-extra mui-icon-extra-peoples"},
      ]
    }
  }

};
</script>

<style scoped>
.active{
  color:red;
}
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background-size: cover;
  background-repeat: no-repeat;
}
.mint-swipe-item:nth-child(1) {
  background-image: url(../../images/MJ.jpg);
}
.mint-swipe-item:nth-child(2) {
  background-image: url(../../images/road.jpg);
}
.mint-swipe-item:nth-child(3) {
  background-image: url(../../images/zhku.jpg);
}
.mui-grid-view.mui-grid-9{
  margin-top: 0;
  background-color: #F0F0F5;
  border: none;
}
.mui-grid-view{
  border:none;
}
.mui-media-body{
  font-size: 12px !important;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>

