// 1、相同点
//  a、都可以描述属性或方法
//  b、都允许扩展

// 1.1 都可以描述属性或方法
type TUser = {
  name: string;
  age: number;
  play(): any;
};
interface IUser {
  name: string;
  age: number;
  play(): any;
}

// 1.2 都允许扩展
type TStudent = TUser & {
  ID: number;
};
interface IStudent extends IUser {
  ID: number;
}



// 2、不同点
//  a、
//    type("类型别称") 可以声明基本数据类型，联合类型，数组等; 
//    interface 声明的是 "变量"
//  b、
//    当出现使用 type 和 interface 声明同名的数据时; 
//    type会直接报错; interface会进行组合

// 2.1、type可以声明基本数据类型，联合类型，数组等；interface只能声明对象类型
type age = number;
type info = string | number | boolean;
type list = [string | number]; // 数组、元组


// 2.2、当使用type和interface声明同名变量时

// type 同名报错
// type name = string;
// type name = string;

// interface 同名自动合并
interface a {
  name: string;
}
interface a {
  age: number;
}
const A: a = {
  name: "张三",
  age: 1
}



export default {}
