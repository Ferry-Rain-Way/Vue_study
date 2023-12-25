<template>
    <div>
        {{name}}
        {{age}}
        {{sex}}
    </div>
</template>

<script>
//导入mixin.js文件
//局部导入:
// import {mixin01} from "../mixin"


export default {
    name:"Student",
    data(){
        return{
            name:"李四",
            age:19
        }
    },
    mounted(){
        console.log("Student中的mounted调用")
    },
        //使用mixin
    // mixins:[mixin01]
}
</script>

<style>

</style>