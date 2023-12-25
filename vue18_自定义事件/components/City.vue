
 <!--组件结构_模板view-->
<template>
  <div>
    <!-- 自定义事件 -->
<!-- 注意此处的代码只有触发 "已绑定事件的功能,若发生了解绑事件,且未再次绑定,此行代码不在奏效" -->
    <button @click="firstCustomEvents">触发自定义事件1(控制台打印)</button>

    <button @click="secondCustomEvents">触发自定义事件2(赋值显示)</button>

    <button @click="thirdCustomEvents">触发自定义事件3(赋值显示)</button>

<br><br>
    <button @click="unbind">解绑自定义事件1</button>

   <button @click="partialUnbinding">解绑自定义事件1,2</button>

   <button @click="unbindAll">全部解绑</button>

   <button @click="death">销毁全部City的实例</button>

   
    <br><br>
  </div>
</template>



<!-- 组件交互相关代码(数据、方法等) -->
<script>
export default  {
    name :"City",
    data(){
      return {
        name:"南京市",
        address:"测试地址"
      }
    },

      methods:{
        //触发自定义事件
        firstCustomEvents(){
            //触发first  并传入数据
            this.$emit('first',this.name,this.address)
        },
        secondCustomEvents(){
          this.$emit('second',this.name,this.address)
        },
        thirdCustomEvents(){
          this.$emit('third',this.name,this.address)
        },

        //解绑1
        unbind(){
            this.$off('first');
        },
        //解绑一部分
        partialUnbinding(){
          this.$off(['first','second']);
        },
        //解绑全部
        unbindAll(){
          this.$off();
        },
        death(){
          this.$destroy();
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