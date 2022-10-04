import './style/index.less'
import ice from './assets/ice.png'

// // 对象
// const obj = { name: '孙悟空', age: 33 }
// console.log(obj)

// // Promise对象
// const pro = new Promise((resolve) => {
//   resolve('resolve')
// })
const wating = async () => {
  const { a } = await import('./utils/promise.ts')
  console.log('res', a)
}
wating()

// // 箭头函数
// const fn = (a) => a
// console.log('fn', fn)

// // 指数计算
// const x = 10 ** 2
// console.log('x', x)

const loadImg = () => {
  const target = document.getElementById('img')
  target.setAttribute('src', ice)
}
loadImg()
