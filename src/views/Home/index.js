import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import './index.less'

const Home = () => {


  return (
    <>
      {/* <img src="/public/辣椒.png" alt="" /> */}

      <div>
        <Link to="/home/car">Car</Link>
        &nbsp;&nbsp;
        <Link to="/home/money">Money</Link>
      </div>

      {/* 嵌套子路由 */}
      <Outlet></Outlet>
    </>
  )
}

export default Home
