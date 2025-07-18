import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

class Header extends Component {

  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyup = (event) =>{
    // 解构赋值获取keyCode，target
    const {keyCode, target} = event;
    // 判断是否是回车按键
    if (keyCode !== 13) return
    // 添加的todo名字不是为空
    if (target.value.trim() === '') {
      alert('输入内容不能为空')
      return;
    }
    // 准备好一个todo对象
    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 调用父组件传递过来的addTodo方法传递参数
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyup} placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    );
  }
}

export default Header;