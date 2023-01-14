import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'

import '@/public/styles/global.less'

const About = () => {

  const person1:Person = {
    name: 'sss',
    age: 18
  }

  
  console.log('keyPartial', person1)

  
  return (
    <div className='mt_20 b_red'>
      <Link to='/page-detail/1'> 去详情页</Link>
    </div>
  )
}

export default About
