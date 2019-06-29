<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li
          v-for="item in menuList"
          :key="item.data"
          class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="item.to">
            <img :src="item.src" alt="" class="myIcon">
            <div class="mui-media-body">{{item.data}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      menuList: [
        { id: 1, data: "新闻资讯", 
          icon: "mui-icon-extra mui-icon-extra-news",
          src:"../../images/newsIcon.jpg",
          to:"/home/newsList",
        },
        {
          id: 2,
          data: "图片分享",
          icon: "mui-icon-extra mui-icon-extra-share",
          src:"../../images/kobe.jpg",
          to:"/home/sharePictures",
        },
        {
          id: 3,
          data: "商品购买",
          icon: "mui-icon-extra mui-icon-extra-prech",
          src:"../../images/MJ.jpg",
          to:"/home/shopping",
        },
        { id: 4, data: "留言反馈", 
          icon: "mui-icon mui-icon-chat",
          src:"../../images/zhku.jpg" ,
          to:"/home/newList",
        },
        { id: 5, data: "视频专区", 
          icon: "mui-icon mui-icon-eye",
          src:"../../images/road.jpg" ,
          to:"/home/newList",
        },
        {
          id: 6,
          data: "联系我们",
          icon: "mui-icon-extra mui-icon-extra-peoples",
          src:"../../images/newsIcon.jpg",
          to:"/home/newList",
        }
      ]
    };
  },
  methods:{

  },
};
</script>

<style scoped>
.active {
  color: red;
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
.mui-grid-view.mui-grid-9 {
  margin-top: 0;
  background-color: #f0f0f5;
  border: none;
}
.mui-grid-view {
  border: none;
}
.mui-media-body {
  font-size: 12px !important;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
.myIcon {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.newsIcon{
  background-image: url(../../images/newsIcon.jpg);
}
</style>

