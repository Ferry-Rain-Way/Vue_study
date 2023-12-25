


 <!--组件结构_模板view-->
<template>
  <div>
      {{name}} 

      <!-- 向City组件中传入参数值 -->
      <!-- 注意这种传入方式241000会被当做一个字符串,而非是数字 -->
      <City name="芜湖" :postalCode="10086"></City>
      
      <!-- 此时241000会被当成数字解析 -->
      <City name="芜湖市" v-bind:postalCode="10086" @click="sayHello"></City>

    <hr>
     <!-- 使用ref获取元素进行操作 -->
    <City ref="city"></City> 
      <!-- 普通元素 -->
      <p ref="elt">这是一个p标签元素</p>

      <button @click="getCityVC">点击打印City节点</button>
      <button @click="getElt">点击打印p节点</button>
  </div>
</template>


<!-- 组件交互相关代码(数据、方法等) -->
<script>
//引入子组件
import City from './City.vue'

export default {
  name :"Province",
  data(){
        return {
            name : "安徽省"
        }
      },
      components:{
          City //子组件
      },
      methods:{
        getCityVC(){
          // 注意在标签上写的时候是 ref
          // 此处写的是 refs
          //ref 如果加在普通标签上火去的是DOM元素
          //加在组件上获取的就是组件VueComponent 
          console.log(this.$refs.city)
        },
        getElt(){
          console.log(this.$refs.elt);
        },
        sayHello(){
          alert("hello")
        }
      }
}
</script>

