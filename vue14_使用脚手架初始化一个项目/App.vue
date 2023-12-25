<template>
   <div>
    <Province></Province>
    <Hello></Hello>
   </div>
</template>

<script>
import Province from './components/Province.vue'
import Hello from './components/Hello.vue'

export default {
    name :"App",
    components:{
        Province,
        Hello
    }
}
</script>
