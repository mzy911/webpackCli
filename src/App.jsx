import React,{Suspense, lazy} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
const Home = lazy(()=>import('@/views/Home'))
const About = lazy(()=>import('@/views/About'))

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
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>
      </div>
    </div>
  )
}
export default App
