// ****************  类型声明：全局第三方库  ****************
// ****************  类型声明：全局第三方库  ****************
// ****************  类型声明：全局第三方库  ****************
// ****************  类型声明：全局第三方库  ****************


// 变量形式
declare let foo: string



// 函数形式：jquery
// declare let jQuery:(param:string) => void
declare function jQuery(param: string): void



// 函数重载形式
declare function getWidget(n: number): number;
declare function getWidget(s: string): string[];



// 对象形式：namespace
declare namespace GreetingLib {
  interface LogOptions {
      verbose?: boolean;
  }
  interface AlertOptions {
      modal: boolean;
      title?: string;
      color?: string;
  }
}



// 可重用类型（接口）
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings): void;



// 可重用类型（类型别名）
type GreetingLike = string | number | (() => string) 
declare function greet(g: GreetingLike): void;



// 类
declare class Greeter{
  constructor(greeting: string);
  greeting: string
  showGreeting(): void;
}



// 声明全局模块
declare module "pathModule" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string
}