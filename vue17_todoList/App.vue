<template>
<div>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addToDoObj="addToDo"/>
      <ToDoList :todos="todos" :statusUpdate="statusUpdate" :deletToDoItem="deletToDoItem"/>
     <ToDoFooter :selectAllToDo="selectAllToDo" :doneTrue="getDoneTrue()" :todoSize="todos.length" :purgeCompletedToDo="purgeCompletedToDo"/>
    </div>
  </div>
</div>
</template>

<script>

import ToDoHeader from './components/ToDoHeader'
import ToDoList from './components/ToDoList'
import ToDoFooter from './components/ToDoFooter'
export default {
    name :"App",
    components:{
      ToDoHeader,
      ToDoList,
      ToDoFooter
    },
    data(){
      return {
        //准备List数据
        todos:JSON.parse(localStorage.getItem('todos'))||[]
        // todos:[
        //   {id:"qwojcxns",content:"学习Spring",done:true},
        //   {id:"jkhdasjk",content:"Mybatis ",done:true},
        //   {id:"asdasdfs",content:"尚硅谷Vue",done:false},
        // ]
      }
    },
    methods:{
      //操作数据
      //添加 addToDoObj :注意此处的函数名尽量不要不能与使用该函数的子组件中的函数名重复
      //如果非得一样的话, 在组件标签中进行传递的时候   v-bind:key="value" 中的key一定不要与使用该函数的子组件中的函数名重复
      //此处的函数名也不要同自身存在的函数名相同,此处我认为就是一个不合适的写法(为了验证 v-bind:key="value" 的用法才这么写的)
      
      addToDo(todoObj){
        this.todos.unshift(todoObj);
      },
      //修改选中状态
      statusUpdate(todoId){
            this.todos.forEach(todo=>{
                  if(todoId === todo.id){
                    todo.done =!todo.done;
                  }
            })
      },
      //删除
      deletToDoItem(todoId,status){
        //提示
        if(status===true||(status===false&& confirm("当前项未完成,是否确定删除?"))){
            //执行删除
            this.todos = this.todos.filter(todo=> todo.id !==todoId ) ;
          }
      },
      //获取已完成ToDo数量
      getDoneTrue(){
        return this.todos.filter(todo=>todo.done===true).length;
      },
      //清除已完成
      purgeCompletedToDo(){
          this.todos = this.todos.filter(todo=>todo.done===false);
      },
      selectAllToDo(){
        //有空or全空 此时全选按钮的状态为未选中 , 改为全选
        let size= this.todos.length;
        let all = size===0||size!==this.getDoneTrue();
        this.todos.forEach(todo=> todo.done =all)

        // let size= this.todos.length;
        // let all = size===0||size!==this.getDoneTrue();
        // this.todos.forEach(todo=> todo.done =all)

        // if(size===0||size!==this.getDoneTrue()){
        //   this.todos.forEach(todo=>{
        //     todo.done = true;
        //   })
        //     //取消全部勾选
        // }else{
        //   //选中全部
        //   this.todos.forEach(todo=>{
        //     todo.done = false;
        //   })
        // }
      }
    },
    watch:{
     todos:{
          deep:true,
          handler(value){
            console.log('watch')
            localStorage.setItem('todos',JSON.stringify(value));
          }
     }
    }
}
</script>


<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }



</style>