import {createApp} from 'vue'
import App from './App'
import router from './router'
import {createPinia} from 'pinia'
export const pinia = createPinia()


// 整体引入：element-ui
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const Apps = createApp(App)


Apps.directive('throttle', {
  beforeMount (el, binding){
    let timer
    el.addEventListener('click', event => {
      if (!timer){ // 第一次执行
        timer = setTimeout(() => {
          binding.value()
          clearTimeout(timer)
          timer = null
        }, 1000)
      } else {
        // 阻止阻止事件冒泡
        event && event.stopImmediatePropagation()
      }
    }, true)
  }
})

Apps.use(router)
Apps.use(pinia)

Apps.mount(document.getElementById('app'))
