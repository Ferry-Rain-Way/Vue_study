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
  <div>
    <p  class="city">{{name}}--{{detailedAddress}}</p> {{postalCode+1}}
  </div>
</template>



<!-- 组件交互相关代码(数据、方法等) -->
<script>
export default  {
    name :"City",
      data(){
        return {
          //默认不推荐更改值,即此处有值不推荐在接收传入的值
          //数据会在页面更新,但是Console会报错
          //The data property "detailedAddress" is already declared as a prop. Use prop default value instead.
          detailedAddress:"固定地址"
        }
      },
     
      //指定属性名
     //   props:['name','postalCode']

     //指定属性名和属性值类型
     /*
     props:{
       name:String,
       postalCode:Number,
     }
    */

    //指定属性名,属性值类型,是否为必须“传入”
    props:{
      name:{
        type:String,
        // required:true
      },
      postalCode:{
        type:Number,
        required:false,//设置默认非必须传入,不写required:false效果一样
        default:99//给定默认值
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