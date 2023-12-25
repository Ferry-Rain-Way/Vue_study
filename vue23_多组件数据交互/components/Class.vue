<template>
  <div>
        班级名称:{{classroom.classname}}<br>
        <button @click="UPDATE_NAME('计算机科学与技术')">点击修改班级名称为:计算机科学与技术</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name:"Class",
    computed:{
        //数据
        // ...mapState(['classroom'])
        ...mapState({classroom:'classroom'})
        // classroom(){
        //     return this.$store.state.classroom; 
        // }

        /*
        解释 ...mapState({classroom:'classroom'})中的后面的classroom为什么要加上双引号
        前面的classroom代表方法名,后面的代表 return this.$store.state.classroom中的classroom
        如果不加双引号
        */

    },
    methods:{
        ...mapMutations(['UPDATE_NAME'])
        // UPDATE_NAME(name){
        //         this.$store.commit('UPDATE_NAME',"计算机科学与技术");
        // }
    }
}
</script>

<style>

</style>