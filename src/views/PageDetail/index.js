import React from 'react'
import {useSearchParams, Link} from 'react-router-dom'

function PageDetail (){

  // 获取 "？" 后参数
  const [params, _] = useSearchParams()


  console.log('params', params.get('aa'))

  
  return (
    
    <ul>
      <li>
        <Link to='/page-detail/1'>page-detail1</Link>
      </li>
      <li>
        <Link to='/page-detail/2'>page-detail2</Link>
      </li>
      <li>
        <Link to='/page-detail/3'>page-detail3</Link>
      </li>
      <li>
        <Link to='/page-detail/4'>page-detail4</Link>
      </li>
    </ul>
  )
}

export default PageDetail