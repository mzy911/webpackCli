<template>
  <div>
    <button v-throttle="sayHello">提交</button > 
  </div>
</template>


<script>
export default {
  name: 'directive-page'
}
</script>

<script setup>
const sayHello = () => {
  console.log(
    '店家'
  )
}
</script>

<style scoped lang="less">

</style>
