import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//全局配置
import app from "./modules/app";
//侧边栏
import sidebar from "./modules/sidebar";
//nasa
import nasa from "./modules/nasa";
// 在开发者模式下启用严格模式，生产环境为提高效率就不用
const debug = process.env.NODE_ENV === "development";

export default new Vuex.Store({
  /* 引入模块*/
  modules: {
    app,
    sidebar,
    nasa
  },
  strict: debug
});
