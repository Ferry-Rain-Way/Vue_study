//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import {nanoid} from 'nanoid'

//应用Vuex插件
Vue.use(Vuex)

//准备state——用于存储数据
const state = {
	classroom:{
		classname:"计科",
		students:[
			{id:nanoid(),name:"张三"},
			{id:nanoid(),name:"李四"},
			{id:nanoid(),name:"王五"},
		]
	},

}



//准备actions——用于响应组件中的动作
const actions = {
	//添加学生信息
	addStudent(minStore,value){
		//这里可以写ajax请求
		
		//若果代码过多,还可以通过写方法,调用dispatch()进行拆解
	
		value.name = value.name + "@";
		minStore.commit('ADD_STUDENT',value)
	}
	
}
//准备mutations——用于操作数据（state）
const mutations = {
	UPDATE_NAME(state,value){
		state.classroom.classname = value;
	},

	ADD_STUDENT(state,value){
			console.log(value);
			state.classroom.students.unshift(value)

	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})
