import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {

  back = () =>{
    this.props.history.goBack()
  }

  forward = () =>{
    this.props.history.goForward()
  }

  go = () =>{
    this.props.history.go(-2)
  }

  render() {
    console.log('Header组件收到的props', this.props)
    return (
      <div>
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>回退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>go</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

// withRouter可以加工一般组件，让一般组件具有路由组件所特有的API
// withRouter的返回值是一个新组件