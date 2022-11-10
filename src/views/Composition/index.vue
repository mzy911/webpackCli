<template>
  <div>
    Composition
    当前指针位置：{{x}}, {{y}}
  </div>
</template>


<script>
import {useMousePosition} from '@/utils/useMousePosition'
export default {
  name: 'composition-page'
}
</script>

<script setup>

const {x, y} = useMousePosition()

</script>

<style scoped lang="less">

</style>
