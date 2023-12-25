<template>
    <div>
        {{name}}
        {{address}}
        <!-- 对于不存在的性别sex属性,mixin01,mixin02都存在
        则以导入顺序中最后的为准 -->
        {{sex}}
    </div>
</template>

<script>
//导入mixin.js文件
//局部导入:
// import {mixin01,mixin02} from "../mixin"

export default {
    name:"School",
    data(){
        return{
            name:"尚硅谷",
            address:"北京"
            
        }
    },
    medthods:{
        sayName(){
            console.log("你好张三")
        }
    },
    mounted(){
        console.log("School中的mounted调用")
    },
    //若使用全局配置时,此处不在手写?
    //使用mixin
    // mixins:[mixin01,mixin02]
}
</script>

<style>

</style>