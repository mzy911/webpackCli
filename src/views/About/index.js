import React, {useRef} from 'react'
import './index.less'

const About = () => {
  let like = useRef(0) // 等同于声明 global 全局变量
  function handleAlertClick (){
    setTimeout(() => {
      console.log(`you clicked on ${like.current}`)
    }, 3000)
  }   
  
  console.log('更新')
  return (
    <div>
      <button
        onClick={() => {
          like.current = like.current + 1
        }}>
        {like.current}赞
      </button> 
      <button onClick={handleAlertClick}>Alert</button>
    </div>
  )
}

export default About
