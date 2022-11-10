import React, {useRef, forwardRef, useImperativeHandle} from 'react'

// 1、子组件使用 forwardRef 包裹
// 2、此时子组件接受两个参数
//    参数1: props
//    参数2：父组件ref对象
// 3、自定义向外暴露方法
const Son2 = (props, ref) => {
  const inputRef = useRef(null) // 绑定DOM元素
  console.log('props', props)

  // 向外暴露自定义方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}
export default forwardRef(Son2)
