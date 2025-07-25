import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {

  state = {
    hasError: '' //用于标识子组件是否产生错误
  }

  // 当Parent的子组件出现报错时，会触发getDerivedStateFromError方法
  static getDerivedStateFromError(error) {
    console.log(error);
    return {hasError: error}
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    console.log('统计错误次数，反馈给服务器，用于通知编码人员进行bug的解决');
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h3>子组件发生错误</h3> : <Child/>}
      </div>
    );
  }
}

export default Parent;