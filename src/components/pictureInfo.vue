<template>
  <div>
    <h4 class="infoTitle">{{itemData.title}}</h4>
    <div style="overflow:hidden;padding: 0 6px;">
      <span class="publishTime">发布时间：{{itemData.infoTime}}</span>
      <span class="clickCount">点击次数：{{itemData.infoClickCount}}</span>
    </div>
    <hr />
    <img :src="itemData.src" />
    <p class="infoMessage">{{itemData.message}}</p>
    <comment></comment>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../components/subComponent/comment.vue";
export default {
  data: function() {
    return {
      id: this.$route.params.id, //根据id获取对应的图片详情,
      pictureURL: [
        {
          id: 1,
          src: "../images/kobe.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "生活如酒，或芳香，或浓烈，因为诚实，，因为守信，它变得悦耳； 生活如画，或明丽，或素雅，因为诚信，它变得美丽。"
        },
        {
          id: 2,
          src: "../images/MJ.jpg",
          title: "满天星辰",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "我们的成长要摆脱低俗事物的纷扰，用传统文化来滋养。有句话叫柔日读史，刚日读经。是说意志懈怠时；金戈铁马，江山万里血泪中。读读经以养性："
        },
        {
          id: 3,
          src: "../images/road.jpg",
          title: "海之宽阔",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "一颗孤独的心需要爱的滋润；一颗冰冷的心需要友谊的温暖；一颗绝望的心需要力量充满戒备关闭的门是多么需要真诚这一把钥匙打开呀！"
        },
        {
          id: 4,
          src: "https://www.baidu.com/img/bd_logo1.png",
          title: "",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "生活如海，宽容作舟山，宽容为径，循径登山，方知山之高大；生活如歌，宽容是曲，和曲而歌，方知歌之动听。"
        },
        {
          id: 5,
          src: "../images/zhku.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "一颗孤独的心需要爱的滋润；一颗冰冷的心需要友谊的温暖；一颗绝望的心需要力量的托慰；一颗苍么需要真诚这一把钥匙打开呀！"
        },
        {
          id: 6,
          src: "../images/kobe.jpg",
          title: "满天星辰",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "我们的成长要摆脱低俗事物的纷扰，用传统文化来滋养。有句话叫柔日读史，刚日读经，江山万里血泪中。读史书，能养浩然以养性：。"
        },
        {
          id: 7,
          src: "../images/MJ.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "当三闾大夫抱着石头与江水相拥，当西片夕阳，当普罗着身体仍想保卫自己的儿子，历史鸣，但他们生命的结尾却那么响亮有力，数千年！"
        },
        {
          id: 8,
          src: "../images/road.jpg",
          title: "海之宽阔",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "我们的成长要摆脱低俗事物的纷扰，用传统文化来滋养。有句话叫柔日读史，刚日读经。是说金戈铁马，江山万里读经分。"
        },
        {
          id: 9,
          src: "../images/kobe.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "生活如海，宽容作舟，泛舟于海，方知海之宽阔；生活如山，宽容为径，循径登山，方知山之高大；生活如歌，宽容是曲，和曲而歌，方知歌之动听。"
        },
        {
          id: 10,
          src: "https://www.baidu.com/img/bd_logo1.png",
          title: "海之宽阔",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "若能掬起一捧叶，我选择最艳也许你会说，我的选择不是最好，但我的选择，我相信"
        },
        {
          id: 11,
          src: "../images/MJ.jpg",
          title: "满天星辰",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "一颗孤独的心需要爱的滋润；一颗冰冷的心需要友谊的温暖；一颗绝望的心需要力量的托慰；一颗苍白的开呀！"
        },
        {
          id: 12,
          src: "../images/road.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "当三闾大夫抱着石头与江水相拥，着身体被巨鹰啄食，当拉奥孔扭曲着身体仍想保卫自己的儿子，历史的悲风中发出阵阵么响亮有力唱！"
        },
        {
          id: 13,
          src: "../images/zhku.jpg",
          title: "舍弃了虚伪",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "我们的成长要摆脱低俗事物的纷扰，用传统文化来滋养。有句话叫柔日读史，刚日读经。是说意志懈万里血泪中。。也是指骄躁正的养分。"
        },
        {
          id: 14,
          src: "../images/kobe.jpg",
          title: "生活如酒",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "生活如海，宽容作舟，泛舟于海，方知海之宽阔；生活如山，宽容为径，循径登山，方知山之高大；生活如歌，宽容是曲，和曲而歌，方知歌之动听。"
        },
        {
          id: 15,
          src: "https://www.baidu.com/img/bd_logo1.png",
          title: "",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "若能掬起一捧月光，我选择最柔和；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信"
        },
        {
          id: 16,
          src: "../images/kobe.jpg",
          title: "舍弃了虚伪",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "生活如海，宽容作舟，泛舟于海，方知海之宽阔；生活如山，宽容为径，循径登山，方知山之高大；生活如歌，宽容是曲，和曲而歌，方知歌之动听。"
        },
        {
          id: 17,
          src: "https://www.baidu.com/img/bd_logo1.png",
          title: "",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "若能掬起一捧月光，我选择最柔和的；若能采来香山是最好，但我的选择，我相信"
        },
        {
          id: 18,
          src: "../images/MJ.jpg",
          title: "舍弃了虚伪",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "拥有诚实，就舍弃了虚伪；拥有诚实，就舍弃了无聊；拥有踏实，就舍弃了浮躁，不论是有意的丢弃，还是意外的也是一种境界。"
        },
        {
          id: 19,
          src: "../images/road.jpg",
          title: "一捧月光",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "拥有诚实，就舍弃了虚伪；拥有诚实，就舍弃了无聊；拥有踏实，就舍弃了浮躁，不论是有意的丢弃，还大度舍弃也是一种境界。"
        },
        {
          id: 20,
          src: "../images/kobe.jpg",
          title: "爱的滋润",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "当三闾大夫抱着石头与江水相拥，当西楚霸王自刎时的鲜血染红了整片夕的儿子，历史的悲风中发出阵！"
        },
        {
          id: 21,
          src: "https://www.baidu.com/img/bd_logo1.png",
          title: "",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若的选择不是最好，但我的选择，我相信"
        },
        {
          id: 22,
          src: "../images/MJ.jpg",
          title: "舍弃了虚伪",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "一颗孤独的心需要爱的滋润；一颗冰冷的心需要友谊的温暖；一颗绝望的心需要力量闭的门是多么需要真诚这一把钥匙打开呀！"
        },
        {
          id: 23,
          src: "../images/road.jpg",
          title: "海之宽阔",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "拥有诚实，就舍弃了虚伪；拥有诚实，就舍弃了无聊；拥有踏实，就舍在一些时候，大度舍弃也是一种境界。"
        },
        {
          id: 24,
          src: "../images/MJ.jpg",
          title: "爱的滋润",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "拥有诚实，就舍弃了虚伪；拥有诚实，就舍弃了无聊；拥有踏实，就舍弃了浮躁要曾经真实拥有，在一些时候，大度舍弃也是一种境界。"
        },
        {
          id: 25,
          src: "../images/road.jpg",
          title: "一捧月光",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "当三闾大夫抱着石头与江水相拥，当西楚霸王自刎时的鲜血染红了整片夕阳，仍想保卫自己的儿子，历史的悲风中发出阵阵悲鸣，但"
        },
        {
          id: 26,
          src: "../images/zhku.jpg",
          title: "一捧月光",
          infoTime: "2018/12/27 17:48",
          infoClickCount: 120,
          message:
            "若能掬起一捧月光，我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若选择不是最好，但我的选择，我相信"
        }
      ],
      //   infoTitle: "",
      //   infoMessage: "",
      //   src: "",
      //   infoTime: "",
      //   infoClickCount: 0
      itemData: {} //用于存放匹配的数据对象
    };
  },
  created() {
    this.pictureURL.forEach(item => {
      if (item.id == this.id) {
        //对应的详情信息
        this.itemData=item;
        // this.infoTitle = item.title;
        // this.infoMessage = item.message;
        // this.src = item.src;
        // this.infoTime = item.infoTime;
        // this.infoClickCount = item.infoClickCount;
      }
    });
  },
  components: {
    comment: comment
  }
};
</script>

<style scoped>
.infoTitle {
  font-size: 16px;
  line-height: 24px;
  color: blue;
  text-align: center;
  font-weight: 800;
}
.publishTime {
  float: left;
  font-size: 12px;
  color: gray;
}
.clickCount {
  float: right;
  font-size: 12px;
  color: gray;
}
img {
  width: 100%;
}
.infoMessage {
  font-size: 14px;
  line-height: 24px;
  color: black;
  text-indent: 2em;
}
</style>


