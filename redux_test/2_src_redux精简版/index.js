// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom/client'
// 引入App组件
import App from './App'
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App/>
)

store.subscribe(() =>{
  root.render(
    <App/>
  )
})