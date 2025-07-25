import React, { PureComponent } from 'react';
import './index.css';

class Parent extends PureComponent {

  state = {carName: "奔驰c63"}

  changeCar = () => {
    this.setState({carName: "迈巴赫"})
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log("shouldComponentUpdate----------");
  //   console.log(this.props, this.state); // 目前的props，state
  //   console.log(nextProps, nextState); // 接下来要变化的目标props，state
  //   return !JSON.stringify(this.state) === JSON.stringify(nextState) // 如果新旧state相等，则不更新
  // }

  render() {
    console.log("Parent render");
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span><br/>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    );
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log("shouldComponentUpdate----------");
  //   console.log(this.props, this.state); // 目前的props，state
  //   console.log(nextProps, nextState); // 接下来要变化的目标props，state
  //   return !JSON.stringify(this.props) === JSON.stringify(nextProps) // 如果新旧state相等，则不更新
  // }

  render() {
    console.log("Child render");
    return (
      <div className="child">
        <h4>我是Child组件</h4>
        <span>我接到的车名字是：{this.props.carName}</span>
      </div>
    );
  }
}

export default Parent;