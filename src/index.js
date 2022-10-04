import './style/index.less'
import { a } from './utils/promise.ts'

// // 对象
// const obj = { name: '孙悟空', age: 33 }
// console.log(obj)

// // Promise对象
// const pro = new Promise((resolve) => {
//   resolve('resolve')
// })
const wating = async () => {
  const res = await a
  console.log('res', res)
}
wating()

// // 箭头函数
// const fn = (a) => a
// console.log('fn', fn)

// // 指数计算
// const x = 10 ** 2
// console.log('x', x)
