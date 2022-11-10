import React from 'react'
import ReactDom from 'react-dom/client'
import 'antd/dist/antd.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

const root = ReactDom.createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
