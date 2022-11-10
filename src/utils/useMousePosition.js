
import {reactive, onMounted, onUnmounted, toRefs} from 'vue'

export function useMousePosition (){
  // 响应式数据
  const position = reactive({
    x: 0,
    y: 0
  })
  
  const update = e => {
    position.x = e.pageX
    position.y = e.pageY
  }
  // 挂载时监听update事件
  onMounted(() => {
    window.addEventListener('mousemove', update)
    console.log('挂载')
  })

  // 卸载时取消update监听事件
  onUnmounted(() => {
    console.log('卸载')
    window.removeEventListener('mousemove', update)
  })

  // 1、参数必须是 "响应式的代理对象"
  // 2、将所有响应式 "属性值都转为响应式对象"，并返回一个新对象
  // 3、新对象的每个属性值，都是一个具有value属性的响应式对象
  return toRefs(position)
}