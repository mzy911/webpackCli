import React, {forwardRef, useImperativeHandle} from 'react'


const CustomEvent = (props, ref) => {

  // 向父组件暴露自定义方法
  useImperativeHandle(ref, (a, b) => ({
    say (){
      console.log('你好呀！')
    }
  }))

  return (
    <>
      CustomEvent
    </>
  ) 

}

// 转发refs到子组件
export default forwardRef(CustomEvent)