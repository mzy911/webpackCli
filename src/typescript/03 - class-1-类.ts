// 父lei
class Animal{

  // 默认为公共属性
  // 1、自身可以访问
  // 2、实例对象可以访问
  // 3、子类可以访问
  name: string

  // 只读属性，只能修饰属性
  readonly id:string

  // 私有属性
  // 1、只有自身可以访问
  private age:number

  // 受保护的属性
  // 1、自身可以访问
  // 2、子类可以访问
  protected son: string

  // 静态属性
  // 1、通过函数名称直接访问、调用
  static origin = {x: 0, y: 0}

  // 构造函数
  constructor (theName: string){ 
    this.name = theName 
    this.son = "张老三"
    this.age = 88
    this.id = "kfhwifhwkef"
  }

  // 存取器
  get fullName (): string{
    return this.name
  }
  set fullName (newName: string){
    this.name = newName
  }

  // 原型上方法
  move (distanceInMeters: number = 0){
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}



// 子类
class Snake extends Animal{
  constructor (name: string){ 
    // super：父类构造函数，实例化子类中可以使用this
    super(name) 
  }
  
  move (distanceInMeters = 5){
    // super：父类，调用父类原型上方法
    super.move(distanceInMeters)
  }
}



let sam = new Snake("Sammy the Python")
sam.move()