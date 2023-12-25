<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- 使用router-link 进行路由切换 -->
          <router-link   class="list-group-item" to="/about"  active-class="active">About</router-link>
          <router-link   class="list-group-item" to="/home"  active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
          <!-- 指定路由显示的位置 -->
          <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

	export default {
		name:'App',
		// components:{
		// 	Home,
		// 	About
		// },
	}
</script>


