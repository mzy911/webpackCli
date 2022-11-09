<template>
  <div>
    <h1>home</h1>

    <br>
    <img src="/public/辣椒.png" alt="" srcset="">

    <br>
    <el-button type="primary">按钮</el-button>

    <br>
    计算属性 count=> ： {{count}} ｜｜ {{mainStore.count}}

  </div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<script setup>
import {storeToRefs} from 'pinia'
import {useMainStore} from '../../store/index'

const mainStore = useMainStore()

// 使用 storeToRefs 包裹数据，可以进行结构
const {count} = storeToRefs(mainStore) 

</script>


<style scoped lang="less">


</style>
