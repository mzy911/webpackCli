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


</script> 
<style scoped lang="less">

</style>
