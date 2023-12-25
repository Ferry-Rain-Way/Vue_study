<template>
  <div>
      <h1>Search Github Users</h1>
      <el-input  v-model="keyworld" @keyup.enter="getUserInfo"  placeholder="enter the name you search" size="mini"> </el-input> 
      <el-button  @click="getUserInfo"   size="mini" >Search </el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"GithubSearch",
    data(){
            return {
                keyworld :''
            }
    },
    methods:{
        //发送axios请求获取数据
        getUserInfo(){
            axios
                .get(`http://api.github.com/search/users?q=${this.keyworld}`)
                .then(
                    response=>{
                        // console.log("请求成功",response.data);
                        
                        //事件触发,传递数据
                        this.$bus.$emit('getUserInfo',response.data.items);
                    },
                    error=>{
                        console.log("请求失败",error.message);
                    }
                )
        }
    },
    beforeDestroy(){
        //解除绑定
        this.$bus.off('getUserInfo');
    }
}
</script>

<style scoped>
.el-input {
    width:300px;
}

.el-button{
   margin-left:20px
}

</style>