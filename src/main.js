//main.js  作为项目的入口文件，在此处导入需要的文件


import Vue from '../node_modules/vue/dist/vue.js' //导入vue
import VueRouter from "vue-router";//导入Vue路由

import MintUI from 'mint-ui' //导入mint-ui
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'  //导入MUI
import app from '../src/App.vue'

import './lib/mui/css/icons-extra.css' //导入MUI的图标文件

import { Header,Swipe, SwipeItem } from 'mint-ui';//导入Mint-UI的Header组件、轮播图
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from '../src/router' //导入路由js

var vm=new Vue({
	el:"#app",
	data:{
	},
	components:{
		'app':app,
	},
	router:router,//挂载路由对象到vue实例
})

