import React, {useRef, forwardRef} from 'react'


// 1、子组件使用 forwardRef 包裹
// 2、此时子组件接受两个参数
//    参数1: props
//    参数2：父组件ref对象
const Son = (props, inputRef) => {
  const inputEl = useRef(null) // 绑定DOM元素
  console.log('props', props)
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  )
}
export default forwardRef(Son)
