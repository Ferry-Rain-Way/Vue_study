import Vue from 'vue'
import App from './App.vue'
//引入store
// import store from './store.index.js'
import store from './store'//相当于上面的代码,会自动查找当前文件夹下的index.js文件

Vue.config.productionTip = false

new Vue({
    el:"#app",
    render: h => h(App),
    store:store
    // beforeCreate(){
    //     //创建全局事件总线
    //     Vue.prototype.$bus = this;
    // }
});
