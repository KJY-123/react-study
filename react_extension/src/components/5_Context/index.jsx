import React, {Component} from 'react';
import './index.css';

// 创建Context对象
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext;
class A extends Component {

  state = {username: 'tom'}

  render() {
    return (
      <div className="parent">
        <h3>我是A组件</h3>
        <h4>我的用户名是：{this.state.username}</h4>
        <Provider value={this.state.username}>
          <B/>
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是B组件</h3>
        <C/>
        <D/>
      </div>
    );
  }
}

class C extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className="grand">
        <h3>我是C组件</h3>
        <h4>我从A组件接收的用户名是：{this.context}</h4>
      </div>
    );
  }
}

function D() {
  return (
    <Consumer>
      {
        value => {
          return (
            <div className="grand">
              <h3>我是D组件</h3>
              <h4>我从A组件接收的用户名是：{value}</h4>
            </div>
          )
        }
      }
    </Consumer>
  );
}

export default A;