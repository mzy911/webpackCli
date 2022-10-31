<template>
  <div>
    <h1>Vue</h1>

    <div>
      <router-link to="/home">Home</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/about">About</router-link>
    </div>

    <router-view></router-view>

  </div>  
</template>

<script>
import  Home from './views/Home'
export default {
    name:'App',
    components:{
      Home
    }
};
</script>

<style scoped lang="less">

</style>
