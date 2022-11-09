import {createPinia, defineStore} from 'pinia'


// 1、参数1：容器id，会被挂载到跟容器上
// 2、参数2：选项对象
export const useMainStore = defineStore('main', { 

  // 类似于组件的data
  // 1、必须是函数，防止被污染
  // 2、必须是箭头函数，有利于TS类型推导
  state: () => {
    return {
      count: 100,
      foo: 100
    }
  },

  // 类似于组件的 computed，用来封装计算属性，具有缓存性
  getters: {
    count10 (){
      return this.count + 10
    }
  },

  // 类似于组件的 methods 封装业务逻辑，需改state
  // 1、actions内不能使用箭头函数
  // 2、因为箭头函数绑定的事外部的this
  actions: {
    // 此处不能使用箭头函数，否则拿不到this
    changeState (){
      this.count++
      this.foo++
    }
    // mainStore.$patch({})
    // mainStore.$patch(()=>{})
  }
})


export const pinia = createPinia()
