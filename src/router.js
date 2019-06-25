import Vue from '../node_modules/vue/dist/vue.js' //导入vue
import VueRouter from "vue-router";

//导入底部导航里的四个组件
import home from "../src/components/tabbarPage/home.vue";
import vip from "../src/components/tabbarPage/vip.vue";
import shopCar from "../src/components/tabbarPage/shopCar.vue";
import search from "../src/components/tabbarPage/search.vue";

Vue.use(VueRouter);
//创建路由对象
var router =new VueRouter({
    routes:[
        {path:"/home",component:home},
        {path:"/vip",component:vip},
        {path:"/shopCar",component:shopCar},
        {path:"/search",component:search}
    ],
    linkActiveClass:'highLight'

});

//向外暴露router
export default router