// import { name } from './test.ts'

// 使用全局注入的 jquery
// $.each([52, 97], function (index, value) {
//   console.log('jquery', index + ': ' + value)
// })

// 使用全局注入的 lodash
// console.log('lodash', _)

// 使用全局注入定义模块的 utils
// console.log('utils', utils)

// 解析ts文件
// console.log('typescript', name)

Promise.resolve('ok').then((val) => {
  console.log('res', val)
})

// const fn = () => {
//   return Promise.resolve().then(() => {
//     return 'resolve'
//   })
// }

// const init = async () => {
//   const res = await fn()
//   console.log('res', res)
// }
// init()

// const fn = () => {
//   return Promise.resolve().then(() => {
//     return 'resolve'
//   })
// }

// const init = async () => {
//   const res = await fn()
//   console.log('res', res)
// }
// init()
