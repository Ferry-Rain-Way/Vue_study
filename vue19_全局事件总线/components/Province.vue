<!--组件结构_模板view-->
<template>
  <div>
    <button @click="sendDataToApp">发送数据到App</button>
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
            name : "江苏省",
            //从子组件获取的数据
        }
      },
      components:{
          City //子组件
      },
      methods:{
        //向父组件App发送数据
        sendDataToApp(){
            //使用全局事件总线传入数据
            this.$bus.$emit('pname',this.name);
            console.log('sendDataToApp',this.name);
        }
      },
      //解绑自定义事件
      beforeDestroy(){
        //解绑的事件名自义定得写!!!!!
        //不然全局事件总线中的事件就全都被解绑了
        this.$bus.$off('pname');

      }

  
}
</script>

