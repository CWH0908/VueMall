<template>
  <div>
    <h4>发表评论</h4>
    <hr />
    <textarea placeholder="请输入评论内容(最多BB120个字)" maxlength="120" v-model="commentMessage"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>

    <transition-group>
      <div class="comment_list" v-for="(item,i) in comment_list" :key="i">
        <div class="comment_title">第 {{ i+1 }} 楼，{{item.name}} ，评论时间：{{item.addtime | timeFormat}}</div>
        <div class="comment_body">{{item.comment_body}}</div>
      </div>
    </transition-group>

    <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      idCount: 0,
      commentMessage: "",
      list_addMore: {
        id: this.idCount + 1,
        name: "cwh",
        addtime: "2019/12/21 20:44",
        comment_body: "我是内容"
      },
      comment_list: [
        {
          id: this.idCount + 1,
          name: "cwh",
          addtime: "2019/12/21 20:44",
          comment_body: "我是内容"
        },
        {
          id: this.idCount + 1,
          name: "匿名用户",
          addtime: "2018/12/11 20:38",
          comment_body: "1234564"
        },
        {
          id: this.idCount + 1,
          name: "小张",
          addtime: "2012/12/08 12:38",
          comment_body: "费瓦冲冲四处即送"
        },
        {
          id: this.idCount + 1,
          name: "傻狗",
          addtime: "2019/03/04 20:54",
          comment_body: "大EvasV字擦地V网"
        },
        {
          id: this.idCount + 1,
          name: "傻狗",
          addtime: "2019/03/04 20:54",
          comment_body: "大EvasV字擦地V网"
        }
      ]
    };
  },
  methods: {
    addComment() {
      if (this.commentMessage == "") {
        Toast("请输入评论内容");
      } else {
        this.comment_list.push({
          id: this.idCount + 1,
          name: "匿名用户",
          addtime: new Date(),
          comment_body: this.commentMessage
        });
        this.commentMessage = "";
      }
    },
    addMore() {
      this.comment_list.push(this.list_addMore);
      this.comment_list.push(this.list_addMore);
      this.comment_list.push(this.list_addMore);
      this.comment_list.push(this.list_addMore);
      this.comment_list.push(this.list_addMore);
    }
  }
};
</script>

<style scoped>
textarea {
  font-size: 12px;
  margin-bottom: 0;
}
.comment_list {
  padding-top: 10px;
}
.comment_title {
  background-color: gray;
  color: white;
  font-size: 12px;
  padding: 0 4px;
  line-height: 20px;
}
.comment_body {
  font-size: 12px;
  text-indent: 2em;
  line-height: 20px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>



