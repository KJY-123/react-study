import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css';

class List extends Component {

  state = { //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否第一次进入页面
    isLoading: false, //是否正在加载
    err: '' //错误信息
  }

  componentDidMount() {
    // PubSub.subscribe('atguigu', (msg, data) =>{
    this.token = PubSub.subscribe('atguigu', (_, stateObj) =>{
      this.setState({
        err: '',
        ...stateObj
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row" style={{margin: 0}}>
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : isLoading ? <h2>正在加载中...</h2> : err ? <h2 style={{color: 'red'}}>{err}</h2> :
          users.map((user, index) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default List;