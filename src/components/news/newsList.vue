<template>
  <div>
    <ul class="mui-table-view" v-for="item in newsListMessage" :key="item.id">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.src">
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{item.message}}</p>
            <div>
              <span class="publishTime">发布时间：{{item.publishTime}}</span>
              <span class="clickCount">点击次数：{{item.clickCount}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newsListMessage: [
        {
          id: 1,
          src: "../../images/MJ.jpg",
          message: "静静的看这个世界，静静的看这个世界，最后终于疯了",
          publishTime: "2016/2/20",
          clickCount: 10
        },
        {
          id: 2,
          src: "../../images/kobe.jpg",
          message: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
          publishTime: "2016/1/20",
          clickCount: 102
        },
        {
          id: 3,
          src: "../../images/road.jpg",
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          publishTime: "2026/12/20",
          clickCount: 1252
        },
        {
          id: 4,
          src: "../../images/zhku.jpg",
          message: "静静的看这个世界，最后终于疯了",
          publishTime: "2018/12/20",
          clickCount: 125
        }
      ]
    };
  }
};
</script>

<style>
.publishTime {
  float: left;
  font-size: 12px;
  color: dodgerblue;
}
.clickCount {
  float: right;
  font-size: 12px;
  color: dodgerblue;
}
</style>


