<template>
    <div>
        <ul v-for="item in classroom.students" :key="item.id">
                <li>{{item.name}}</li>
        </ul>

        <button @click="addStudent({id:nid(),name:'周六'})">点击添加一个学生信息并在姓名后面拼接@</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapActions, mapState } from 'vuex'
export default {
    name:"Student",
    computed:{
        //数据
        ...mapState({classroom:'classroom'})

    },
    methods:{
        ...mapActions(['addStudent']),
        nid(){
            return nanoid();
        }

    }
}
</script>

<style>

</style>