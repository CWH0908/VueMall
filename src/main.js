//main.js  作为项目的入口文件，在此处导入需要的文件


import Vue from '../node_modules/vue/dist/vue.js' //导入vue
import VueRouter from "vue-router";//导入Vue路由

import MintUI from 'mint-ui' //导入mint-ui
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'  //导入MUI
import app from '../src/App.vue'

import './lib/mui/css/icons-extra.css' //导入MUI的图标文件

import { Header,Swipe, SwipeItem,Button } from 'mint-ui';//导入Mint-UI的Header组件、轮播图、按钮
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import router from '../src/router' //导入路由js

import resource from 'vue-resource';//导入vue的resource
Vue.use(resource);//注册

Vue.filter('timeFormat',function(dateStr){//时间过滤器
	var dt = new Date(dateStr);

	var y=dt.getFullYear();
	var m=dt.getMonth()+1;
	var d=dt.getDate();

	var h=dt.getHours();
	var m=dt.getMinutes();
	var s=dt.getSeconds();

	var time = y+"-"+m+"-"+d+" "+h+":"+m+":"+s;
	return time;
});

var vm=new Vue({
	el:"#app",
	data:{
	},
	components:{
		'app':app,
	},
	router:router,//挂载路由对象到vue实例
})

