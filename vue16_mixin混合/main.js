import Vue from 'vue'
import App from './App.vue'

//导入插件
import plugins from "./plugins"
Vue.use(plugins,1,2,3);

// 全局导入mixin.js
import {mixin01,mixin02}  from './mixin.js'
Vue.mixin(mixin01);
Vue.mixin(mixin02);

Vue.config.productionTip = false


new Vue({
  el:"#app",
  render: h => h(App),
});
