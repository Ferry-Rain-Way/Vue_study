<template>
  <div class="gitList">
      <!--绘制显示搜索结果的list -->
      <el-row :gutter="20" >
            <el-col :span="6" class="grid-content"  v-for="user in users"  :key="user.login">
               <img :src="user.avatar_url"><br>
               <a :href="user.html_url">{{user.login}}</a>
            </el-col>
       </el-row>
  </div>
</template>

<script>
export default {
    name:"GithubList",
      data(){
          return{
              users:[] ,//用户数据存储
          }
          
      },
      methods:{
          //成功后执行的回调函数
          setUserInfo(userData){
                  this.users = userData;
          }
      },
      mounted(){
              //绑定自定义事件
              this.$bus.$on('getUserInfo',this.setUserInfo);
      }
}
</script>

<style scoped>
/* myset */
.gitList{
  margin-bottom: 50px;
}

p{
    background: #d3dce6;   
  }
  
  .el-col   img{
    width:100px;
    height: 100px;
  }
/* 设置最小宽度和最小高度 */
  .grid-content {
    border-radius: 4px;
    min-height: 180px;
    min-width: 180px;
  }

  /* element-ui */
  .el-row {
     margin-bottom: 50px;
  }
  .el-col {
    border-radius: 4px;
  }



  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>