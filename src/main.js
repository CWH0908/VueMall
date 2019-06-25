//main.js  作为项目的入口文件，在此处导入需要的文件


import Vue from '../node_modules/vue/dist/vue.js' //导入vue

import MintUI from 'mint-ui' //导入mint-ui
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'  //导入MUI
import app from '../src/App.vue'

import './lib/mui/css/icons-extra.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm=new Vue({
	el:"#app",
	data:{
	},
	components:{
		'app':app,
	},
})

