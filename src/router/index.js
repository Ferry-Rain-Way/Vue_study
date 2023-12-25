//路由的配置

//安装路由: npm i vue-router@3   → 支持vue2
//导入vue-router
import VueRouter from "vue-router";
//引入组件
import About from '../components/About'
import Home from '../components/Home'

//创建并暴露一个路由器
export default  new VueRouter({
    routes:[
        {path :'/about',component:About},
        {path :'/home',component:Home},
    ]
})
