import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import './index.less'

const About = () => {
  
  console.log('更新')
  return (
    <div>
      <Link to='/page-detail/1'> 去详情页</Link>
    </div>
  )
}

export default About
