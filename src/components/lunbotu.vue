<template>
  <div class="block">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in getImg" :key="item.id">
        <img class="barImg" :src="item.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  //轮播图组件
  props:["getImg"]
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.barImg{
  width:100%;
}
</style>