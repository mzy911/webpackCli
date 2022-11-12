import React from 'react'
import {useLocation} from 'react-router-dom'

function Money (props){
  const local = useLocation()
  console.log('local', local)
  console.log('props', props)

  return (
    <div>Money</div>
  )
}

export default Money