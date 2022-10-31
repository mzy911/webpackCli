import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from '@/views/Home'
import About from '@/views/About'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <div>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App
