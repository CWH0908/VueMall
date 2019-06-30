import Vue from '../node_modules/vue/dist/vue.js' //导入vue
import VueRouter from "vue-router";

//导入底部导航里的四个组件
import home from "../src/components/tabbarPage/home.vue";
import vip from "../src/components/tabbarPage/vip.vue";
import shopCar from "../src/components/tabbarPage/shopCar.vue";
import search from "../src/components/tabbarPage/search.vue";

//导入新闻列表子组件
import newsList from "../src/components/news/newsList.vue";

//导入新闻详情子组件
import newsInfo from "../src/components/news/newsInfo.vue";

//导入分享图片子组件
import sharePictures from "../src/components/sharePictures.vue";

//导入图片详情子组件
import pictureInfo from "../src/components/pictureInfo.vue"

//导入商品列表组件
import shopping from "../src/components/shoppingCommnet/shopping.vue"

Vue.use(VueRouter);
//创建路由对象
var router =new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopCar",component:shopCar},
        {path:"/search",component:search},

        {path:"/home/newsList",component:newsList}, 
        {path:"/home/newsInfo/:id",component:newsInfo}, 

        {path:"/home/sharePictures",component:sharePictures}, //图片列表
        {path:"/home/pictureInfo/:id",component:pictureInfo},//图片详情

        {path:"/home/shopping",component:shopping},//商品列表页面
    ],
    linkActiveClass:'highLight'

});

//向外暴露router
export default router