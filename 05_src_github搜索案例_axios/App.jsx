import React, {Component} from 'react';
import Search from './components/Search'
import List from './components/List'

class App extends Component {

  state = { //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否第一次进入页面
    isLoading: false, //是否正在加载
    err: '' //错误信息
  }

  // 更新App的state
  updateAppState = (stateObj) =>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState} />
          <List {...this.state}/>
        </div>
      </div>
    );
  }
}

export default App;