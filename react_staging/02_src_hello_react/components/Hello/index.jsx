import React, { Component } from 'react'
import hello from  './index.moudule.css' // 样式的模块化（一般在css中用，less等嵌套中不用）

export default class Hello extends Component {
  render() {
    return (
      <h2 className={hello.title}>Hello, react</h2>
    )
  }
}