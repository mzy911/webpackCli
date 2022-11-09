import {defineStore} from 'pinia'
import {getProduction} from '../Api'


export const useProductionStore = defineStore('main', { 
  state: () => {
    return {
      all: []
    }
  },

  getters: {
    count10 (){
      return this.count + 10
    }
  },

  actions: {
    // 异步操作
    async loadAllProduction (){
      const res = await getProduction()
      this.all = res
    }
  }
})
