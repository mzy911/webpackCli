// 类型别名：为任意类型起别称
// 使用场景：当同一类型被使用多次的时候，可以通过类型别名，简化该类型的使用
// 类型：原始值，联合类型，元组以、泛型


type CustomArray = (number | string)[]
let arr1:CustomArray = [1, 2, 3]
let arr2:CustomArray = ["a", "b", "c"]
let arr3:CustomArray = ["a", 2, "c"]
let arr4:CustomArray = [1, "b", 3]

console.log("arr1", arr1)
console.log("arr2", arr2)
console.log("arr3", arr3)
console.log("arr4", arr4)

