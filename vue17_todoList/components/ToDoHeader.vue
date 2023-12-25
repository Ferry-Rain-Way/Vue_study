<template>
    <div class="todo-wrap">
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称,按回车键确认" @keyup.enter="addToDo"/>
      </div>
    </div>
</template>

<script>
//使用nanoid
/*
1、安装
  npm install nanoid

2、导入
  import {nanoid} from "nanoid"

3、使用
  nanoid()
  此函数的返回值就是一个简单的UUID
  
*/
import {nanoid} from "nanoid"
export default {
    name:"ToDoHeader",
    props:['addToDoObj'],
    methods:{
      addToDo(event){
        //执行TODO的添加
        //获取id
          //获取输入内容
        let content =  event.target.value.trim();
        if(content==="")return ;
        //done :是否完成,初始值为false,设置为未完成
        //nanoid() 返回UUID
        const todoObj = {id:nanoid(),content,done:false}
        //在需要操作数据的地方(App.vue) 中定义一个函数,并将函数通过标签传给子组件
         //子组件通过调用父组件传入的函数,以参数的形式将对象返回给 App.vue中进行添加
         this.addToDoObj(todoObj);
        event.target.value = "";
      }
    }
}
</script>

<style scoped>

/*header*/
.todo-header input {
  width: 520px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>