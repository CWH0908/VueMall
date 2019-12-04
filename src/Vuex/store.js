import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//向外暴露 Store 对象 ，在 main.js 中接收
export default new Vuex.Store({
    state:{
        "city":"广州"
    }
})