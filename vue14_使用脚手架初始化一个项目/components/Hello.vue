<template>
  <p class="hello">Hello.vue : {{showContent}}</p>
</template>

<script>
export default {
    name:"Hello",
    data(){
        return {
          showContent:"这是我创建的第一个Vue脚手架文件"
        }   
    }
}
</script>

<style>
.hello{
  color:"#5c940d";
}

</style>