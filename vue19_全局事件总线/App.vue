<template>
   <div>
    <Province ></Province>
    {{provinceName}}
   </div>
</template>

<script>
import Province from './components/Province.vue'

export default {
    name :"App",
    components:{
        Province
    },
    data(){
       return{
        provinceName:""
       }
    },
    methods:{
        //接收Province的数据
        getDateFromProvince(data){
            this.provinceName = data;
                console.log(data)
        }
    },
    mounted(){
        this.$bus.$on('pname',this.getDateFromProvince);
    }
}
</script>
