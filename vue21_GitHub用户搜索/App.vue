<template>
    <div>
        <GithubSearch class="gitSea"/>
        <GithubList/>
    </div>
</template>

<script>
import GithubSearch from './components/GithubSearch'
import GithubList from './components/GithubList'

export default {
    name:"App",
    components:{
        GithubSearch,
        GithubList
    }
}
</script>

