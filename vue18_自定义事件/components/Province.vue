<!--组件结构_模板view-->
<template>
  <div>
      {{name}} 
      <!-- 
        在组件上直接上直接写 @click的形式会被当成自定义事件
          若想写成原生事件,加上 .native
       -->

       <!-- 绑定自定义事件 -->
       <button  @click="test3"> 绑定自定义事件3</button>
       <!-- 若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。 -->
        <City @first="test" v-on:second="test2"   ref="bangding"/>
        <br>
        
      {{sonName}}
      {{sonAddress}}
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
            sonName:'',
            sonAddress:''
        }
      },
      components:{
          City //子组件
      },
      methods:{
        sayHello(){
          alert("hello")
        },


        //自定义事件 
        //1、数据接收
        test(name,address){
          console.log('test',name,address)
        },

        //2、接收数据并展示
        test2(name,address){
          this.sonName = name;
          this.sonAddress = address;
        },

        //3、在父组件中进行事件绑定
/*
假设 子组件City
        父组件Province

        在methods中配置  this 指向当前组件Province → 正确
        使用funtion(){}函数,  this 指向子组件City → 错误
        还是使用箭头函数,此时的 this都指向 this 指向当前组件Province → 正确

        注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，
        回调要么配置在methods中()，要么用箭头函数，否则this指向会出问题

        推荐使用 在methods中配置!!
*/
        test3(){
          this.$refs.bangding.$on('third',(...param)=>{
          this.sonName = param[0];
          this.sonAddress = param[1];
          //此处的this指向vc
          console.log(this)
        })
        },

        //在methods中写的回调函数
        setSonValueToParent(...param){
          this.sonName = param[0];
          this.sonAddress = param[1];
          //此处的this指向vc
          console.log(this)
        },

      }
}
</script>

