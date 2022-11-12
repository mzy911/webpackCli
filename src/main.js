import React from 'react'
import ReactDom from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css'

const root = ReactDom.createRoot(document.getElementById('app'))
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
