import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class Messages extends Component {
  state = {
    messageArr: [
      {id:'01', title:'消息1'},
      {id:'02', title:'消息2'},
      {id:'03', title:'消息4'}
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        <Route path="/home/messages/detail/:id/:title" component={Detail}/>
      </div>
    );
  }
}

export default Messages;