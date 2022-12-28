
// 抽象类
// 1、做为其它派生类的基类使用
// 2、抽象类不能被实例化
// 3、抽象类中的抽象方法不包含具体实现并且必须在派生类中实现


abstract class Department{
  constructor (public name: string){
    console.log("抽象类 constructor", name)
    
  }

  // 派生类中可有可无
  printName (): void{
    console.log("Department name: " + this.name)
  }

  // 派生类中必须实现
  abstract printMeeting(): void; 
}



class AccountingDepartment extends Department{

  // 在派生类的构造函数中必须调用 super()
  constructor (){
    super("Accounting and Auditing") 
  }

  printMeeting (): void{
    console.log("The Accounting Department meets each Monday at 10am.")
  }

  generateReports (): void{
    console.log("Generating accounting reports...")
  }
}


let department: Department // 允许创建一个对抽象类型的引用
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在


export default {}