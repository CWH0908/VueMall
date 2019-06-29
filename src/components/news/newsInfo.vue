<template>
  <div>
    <h3 class="newsTitle">标题{{id}}:{{getWhichNewsInfo.title}}</h3>
    <div style="overflow:hidden;padding: 0 6px;">
      <span class="publishTime">发布时间：{{getWhichNewsInfo.publishTime}}</span>
      <span class="clickCount">点击次数：{{getWhichNewsInfo.clickCount}}</span>
    </div>
    <hr />
    <article class="newsMessage">{{getWhichNewsInfo.newsMessage}}</article>

    <!-- 评论子组件 -->
    <comment></comment>
  </div>
</template>

<script>
import Vue from "../../../node_modules/vue/dist/vue.js";//用到vue-resource必须引入vue
import resource from "vue-resource"; //导入vue的resource
import comment from "../subComponent/comment.vue";//导入评论子组件

Vue.use(resource); //注册
export default {
  data: function() {
    return {
      id: this.$route.params.id, //根据此id发送Ajax请求获取指定的新闻详情数据
      getWhichNewsInfo: {
        title: "一季度多家房企利润跌幅超过60%，楼市震荡！",
        publishTime: "2018/20/12 12:40",
        clickCount: 20,
        newsMessage:
          "【培训晋升】：提供一整套严密在职专业训练，入职培训、日常培训及内部晋升机会（客户经理-业务主管-营销主管--营销总监-营业部负责人），初级晋升即可申请带团队，并享有团队业绩提成,5、丰富多彩的员工活动：公司旅游、户外拓展活动、年度晚会、乒乓球、羽毛球比赛等；"
      } //假设为使用Ajax获取的数据
    };
  },
  components:{
    "comment":comment,
  }
};
</script>

<style>
.newsTitle {
  color: red;
  font-size: 14px;
  padding: 0 4px;
}
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
.newsMessage {
  color: gray;
  font-size: 14px;
}
</style>


