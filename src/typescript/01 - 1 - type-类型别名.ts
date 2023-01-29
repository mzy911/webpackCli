// 类型别名：给一个类型起一个别名 sting、number
// 使用场景：当同一类型被使用多次的时候，可以通过类型别名，简化该类型的使用
// 类型：原始值，联合类型，元组、泛型


type Name = string

type NameResolver = () => string

type NameOrResolver = Name | NameResolver // 联合类型

function getName (n: NameOrResolver): Name{
  if (typeof n === "string"){
    return n
  }
  else {
    return n()
  }
}

