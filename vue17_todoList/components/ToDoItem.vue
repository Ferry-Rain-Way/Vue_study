<template>
         <div>
            <li  v-for="todo in todos" :key="todo.id">
            <label>
              <input type="checkbox" :checked="todo.done" @change="changeStatus(todo.id)"/>

            <!-- 注意,只通过v-model也是可以改变todo.done的值,
              但是不推荐这么写 todo.done的值是通过 props中的todos获取到的
              前面已经说过了,props中的值部队件修改
             -->
              <!-- <input type="checkbox" :checked="todo.done" v-model="todo.done"/> -->
              
             <!-- 动态决定是否添加中划线效果 -->
              <span  :class="{del:todo.done}">{{todo.content}}</span>
            </label>
            <button class="btn btn-danger" @click="deleteToDo(todo.id,todo.done)" >删除</button>
          </li>
         </div>
</template>

<script>
export default {
    name:"ToDoItem",
    props:['todos','statusUpdate','deletToDoItem'],
    methods:{
      //更改完成状态
      changeStatus(id){
          this.statusUpdate(id);
          //中划线效果

      },

      deleteToDo(id,status){
        this.deletToDoItem(id,status)
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* 设置"删除按钮的显示与隐藏" */

li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
  /* 中划线效果 */
.del{
  text-decoration: line-through
}
</style>