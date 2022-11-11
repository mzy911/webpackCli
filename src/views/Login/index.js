import {Button} from 'antd'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login (){
  const navigage = useNavigate()
  const toPage = () => {
    navigage('/')
  }
  return (
    <Button type='primary' onClick={toPage}>登陆</Button>
  )
}
export default Login