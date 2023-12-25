<template>
	<div>
		<h1>当前求和为：{{$store.state.sum}}</h1>
		<h1>当前求和为：{{$s.sum}}</h1>
		<h1>当前求和为：{{sum}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
        computed:{
            //简写
                $s(){
                    return this.$store.state;
                },
                //或者
                sum(){
                    return this.$store.state.sum;
                }

        },
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				// this.$store.dispatch('jiaOdd',this.n)
                if(this.$store.state.sum%2){
                    this.$store.state.sum+=1;
                }
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>