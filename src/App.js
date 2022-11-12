import React from 'react'
import {useRoutes} from 'react-router-dom'
import router from '@/router/index'
import {NavLink} from 'react-router-dom'


const App = () => {
  return useRoutes(router)
}
export default App
