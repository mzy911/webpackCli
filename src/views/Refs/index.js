import React, {useState, useRef} from 'react'
import Son1 from './Son1'
import Son2 from './Son2'

const About = () => {
  const inputRef = useRef()
  const cliBtn = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      {/* 将ref定义到父组件 */}
      {/* <Son1 ref={inputRef}></Son1> */}
      <Son2 ref={inputRef}></Son2>
      <button onClick={cliBtn}>点击</button>
    </div>
  )
}

export default About
