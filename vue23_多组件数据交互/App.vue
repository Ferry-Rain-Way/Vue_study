<template>
	<div>
		<h1>Student</h1>
		<Student/>

		<hr>
		
		<h1>Class</h1>
		<Class/>

	</div>
</template>

<script>
import Class from './components/Class.vue'
import Student from './components/Student.vue'
	export default {
		name:'App',
		components:{Class,Student},
	}
</script>
