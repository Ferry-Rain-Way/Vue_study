<template>
  <div class="todo-footer" v-show="todoSize">
        <label>
         全选:  <input type="checkbox" @change="selectAll" :checked="!((todoSize===0)||(doneTrue!==todoSize))"/>
        </label>
        <span>
          <span>已完成{{doneTrue}}</span> / 全部{{todoSize}}
        </span>
        <button class="btn btn-danger" @click="purgeCompleted()">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:"ToDoFooter",
    props:['doneTrue','todoSize','purgeCompletedToDo','selectAllToDo'],
    methods:{
      //清除已完成任务
      purgeCompleted(){
          this.purgeCompletedToDo();
      },
      //全选/全部取消
      selectAll(){
          this.selectAllToDo();
      }

    }
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>