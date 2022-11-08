<template>
  <div>
    <h1>Vue</h1>

    <div>
      <router-link to="/home">Home</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/directive">Directive</router-link>
    </div>

    <router-view></router-view>


  </div>  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">

</style>
