import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import $ from 'jquery'

import '@/public/styles/global.less'

const About = () => {

  
  console.log('keyPartial', $)

  
  return (
    <div className='mt_20 b_red'>
      <Link to='/page-detail/1'> 去详情页</Link>
    </div>
  )
}

export default About
