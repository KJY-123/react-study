import React, {Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {todos: [
    {id: '001', name: '吃饭', done: true},
    {id: '002', name: '睡觉', done: true},
    {id: '003', name: '打代码', done: false},
    {id: '004', name: '逛街', done: true},
  ]}

  // 用于添加一个todo, 接收的参数是todo对象
  addTodo = (todoObj) =>{
    // 获取原todos
    const {todos} = this.state;
    // 追加todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    console.log(newTodos);
    this.setState({todos: newTodos});
  }

  // 用于更新一个todo的done值
  updateTodo = (id, done) =>{
    // 获取状态中的todos
    const {todos} = this.state;
    // 匹配处理数据
    const newTodos = todos.map(item =>{
      if(item.id === id) return {...item, done}
      else return item
    })
    // 更新状态
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;