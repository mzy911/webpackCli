import React, {useState, useRef} from 'react'
import useTitle from '../../Hooks/useTitle'
import Son1 from './Son1'
import Son2 from './Son2'
import CustomEvent from './CustomEvent'

const About = () => {
  const inputRef = useRef()
  const cliBtn = () => {
    // inputRef.current.focus()

    // 触发子组件，自定义方法

    console.log(inputRef.current.say())
  }
  return (
    <div>
      {/* 动态标题 */}
      <div>
        {useTitle('Refs')}
      </div>


      {/* 将ref定义到父组件 */}
      {/* <Son1 ref={inputRef}></Son1> */}
      {/* <Son2 ref={inputRef}></Son2> */}


      <CustomEvent ref={inputRef}></CustomEvent>

      <button onClick={cliBtn}>点击</button>
    </div>
  )
}

export default About
