/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/m1.js
var a = 'aaa';
;// CONCATENATED MODULE: ./src/index.js


console.log('m', a); // 对象

var obj = {
  name: '孙悟空',
  age: 33
};
console.log(obj); // Promise对象
// const pro = new Promise((resolve) => {
//   resolve('resolve')
// })
// const wating = async () => {
//   const res = await pro
//   console.log('res', res)
// }
// wating()
// 箭头函数

var fn = function fn(a) {
  return a;
};

console.log('fn', fn); // 指数计算

var x = Math.pow(10, 2);
console.log('x', x);
/******/ })()
;