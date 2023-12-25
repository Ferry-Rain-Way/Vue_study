<!-- 
VSCode本身不支持 .vue文件的语法高亮需要安装两个插件
1、
    插件名:Vetur
    插件作者:Pine Wu
    
2、
    插件名:Vue Language Features (Volar)
    插件作者:Vue
 -->

 <!--组件结构_模板view-->
<template>
<p  class="city">{{name}}--{{detailedAddress}}</p>
</template>



<!-- 组件交互相关代码(数据、方法等) -->
<script>

/*
let city = Vue.extend({
      data(){
        return {
          name : "蚌埠市",
          detailedAddress:"怀远县榴城镇....."
        }
      }
  })

  export default city;
*/

export default  {
    name :"City",
      data(){
        return {
          name : "蚌埠市",
          detailedAddress:"怀远县榴城镇....."
        }
      }
  }

</script>


<!-- 组件样式 -->
<style>
.city{
    color:blue;
}
</style>