import React, {Component} from 'react';
import './index.css';
import C from '../1_setState'

class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是父组件</h3>
        <A render={(name) => <C name={name} />}/>
      </div>
    );
  }
}

class A extends Component {
  state = {name: 'tom'}
  render() {
    const {name} = this.state
    return (
      <div className="A">
        <h4>我是A组件</h4>
        {this.props.render(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="B">
        <h4>我是B组件</h4>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Parent;