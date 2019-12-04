<template>
  <div class="main">
    <div class="mui-content">
      <!-- 商品轮播图区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <!-- <lunbotu :getImg="getImg"></lunbotu> -->
          <!-- <img style="display:block;width:100%" :src="getImg[0].src" @click="imageClick" /> -->
          <el-image style="display:block;width:100%"  :src="getImg[0].src" :preview-src-list="getSrc"></el-image>
        </div>
      </div>

      <!-- 商品购买区域 -->
      <div class="mui-card" v-for="item in getData" :key="item.id">
        <div class="mui-card-header">{{item.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div>
              市场价：
              <span style="text-decoration:line-through">{{item.market_price}}</span>
              &nbsp &nbsp &nbsp &nbsp
              销售价：￥
              <span
                style="color:red"
              >{{item.sell_price}}</span>
              <br />
              <h4 class="payInfo" style="display:inline-block">购买数量：</h4>
              <el-input-number
                v-model="num"
                @change="handleChange"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number>
            </div>
            <el-button type="primary" round>立即购买</el-button>
            <el-button type="danger" round>加入购物车</el-button>
          </div>
        </div>
      </div>

      <!-- 商品参数区域 -->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>
              商品货号：
              <span>商品货号</span>
            </p>
            <p>
              库存情况：
              <span>库存情况</span>
            </p>
            <p>
              上架时间：
              <span>上架时间</span>
            </p>
          </div>
        </div>
      </div>

      <!-- 底部区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-button style="width:100%;margin-bottom:4%;" type="primary" plain>图文介绍</mt-button>
            <mt-button style="width:100%;" type="danger" plain>商品评论</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //引入axios

import lunbotu from "../../components/lunbotu.vue"; //导入轮播图组件

export default {
  //根据 this.$route.params.id 路由参数 对象 来显示对应商品的详情
  created() {
    // this.openFullScreen(); //加载动画
  },
  data() {
    return {
      getData: [],
      getImg: [], //请求回来的图片地址
      getSrc: [], //纯图片地址用于预览
      id: this.$route.params.index, //转存参数
      num: 1 //购买数量
    };
  },
  mounted() {
    this.returnData();
    this.returnImgSrc();
  },
  methods: {
    returnData() {
      axios
        .get(
          "https://mockapi.eolinker.com/4VLgjtce15e8728b855c5b280bf96334eca5ff672228fed/cwh",
          {
            params: {
              goodsId: this.$route.params.index
            }
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data instanceof Array) {
            this.openFullScreen(); //加载动画
            this.getData = response.data;
          } else {
            // this.open();
            alert("资源获取失败");
          }
        })
        .catch(error => {
          console.log(error);
          alert("资源请求错误！");
        });
    },
    returnImgSrc() {
      axios
        .get(
          "https://mockapi.eolinker.com/4VLgjtce15e8728b855c5b280bf96334eca5ff672228fed/cwh",
          {
            params: {
              imgSrc: "getImgSrc" //此处可以根据id来请求对应的数据'
              // getImg: "homeTopBarPictures" //此处可以根据id来请求对应的数据
            }
          }
        )
        .then(response => {
          console.log("获取回来的图片数据", response.data);
          this.getImg = response.data;
          this.getSrc.push(response.data[0].src);
        });
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
    handleChange() {},
    open() {
      this.$alert("资源获取失败", {
        confirmButtonText: "确定"
      });
    },
  },
  components: {
    lunbotu
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.payInfo {
  padding-top: 4%;
}
</style>