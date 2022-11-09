<template>
  <div>
    <h1 style="textAlign:center;">Vue</h1>

    <div>
      <router-link to="/home">Home</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/about">About</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/directive">Directive</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/store">Store</router-link>
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
