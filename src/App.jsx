import React, {Suspense, lazy} from 'react'
import {Link, Routes, Route} from 'react-router-dom'
const Home = lazy(() => import(/* webpackChunkName:'home' */ '@/views/Home/index'))
const MemoCallBack = lazy(() => import(/* webpackChunkName:'MemoCallBack' */ '@/views/MemoCallBack/index'))
const About = lazy(() => import(/* webpackChunkName:'About' */ '@/views/About/index'))
const Refs = lazy(() => import(/* webpackChunkName:'Refs' */ '@/views/Refs/index'))

const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>React</h1>
      
      <div style={{padding: '20px'}}>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/memo-call-back">MemoCallBack</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/refs">Refs</Link>
      </div>

      <div style={{marginTop: '20px', padding: '20px'}}>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/memo-call-back" element={<MemoCallBack />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/refs" element={<Refs />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
export default App
