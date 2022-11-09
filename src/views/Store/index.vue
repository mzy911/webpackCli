<template>
  <div>
    <br>
    计算属性 count=> ： {{count}} ｜｜ {{mainStore.count}}

    <br>
    计算属性 foo=> ： {{foo}}

    <br>
    <button @click="changeCount">增加Count值</button>
    
  </div>
</template>


<script>
export default {
  name: 'store-page'
}
</script>
<script setup>
import {storeToRefs} from 'pinia'
import {useMainStore} from '../../store/index'
// import {watch} from 'vue'
// import {pinia} from '../../index'
const mainStore = useMainStore()

// 使用 storeToRefs 包裹数据，可以进行结构
const {count, foo} = storeToRefs(mainStore) 


const changeCount = () => {

  // 1、单一修改数据
  // mainStore.count++


  // 2、批量修改数据：传递对象
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: mainStore.foo + 1
  // })


  // 3、批量修改数据：传递函数，接受state
  // mainStore.$patch((state) => {
  //   state.count++
  //   state.foo++
  // })


  // 4、使用action修改
  mainStore.changeState()

}

// // 监听所有 pinia 中存储数据的变化
// watch(pinia.state, (state) => {
//   console.log('监听', state)

// }, {deep: true})


// 监听 pinia 中某个模块数据的变化
mainStore.$subscribe((mutation, state) => {
  console.log('监听变化')
  // // 每当它发生变化时，将整个状态持久化到本地存储
  // localStorage.setItem('cart', JSON.stringify(state))
})


</script> 
<style scoped lang="less">

</style>
