<template>
    <ul class="todo-main">
        <ToDoItem :todos="todos" :statusUpdate="statusUpdate" :deletToDoItem="deletToDoItem"/>
      </ul>
</template>

<script>
import ToDoItem from './ToDoItem.vue'

export default {
    name:"ToDoList",
    components:{
      ToDoItem
    },
    props:['todos','statusUpdate','deletToDoItem']
}
</script>

<style scoped> 

/*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>