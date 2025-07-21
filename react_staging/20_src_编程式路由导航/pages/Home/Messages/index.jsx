import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class Messages extends Component {
  state = {
    messageArr: [
      {id:'01', title:'消息1'},
      {id:'02', title:'消息2'},
      {id:'03', title:'消息3'}
    ]
  }

  replaceShow = (id, title) =>{
    // replace跳转 + 携带params参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)

    // replace跳转 + 携带search参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)

    // replace跳转 + 携带state参数
    this.props.history.replace(`/home/messages/detail`, {id, title})
  }

  pushShow = (id, title) =>{
    // push + 携带params参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}`)

    // push + 携带search参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)

    // push + 携带state参数
    this.props.history.push(`/home/messages/detail`, {id, title})
  }

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
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>

                  {/* 向路由组件传递params参数 */}
                  {/*<Link to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>*/}

                  {/* 向路由组件传递search参数 */}
                  {/*<Link to={`/home/messages/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>&nbsp;&nbsp;*/}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/messages/detail', state:{id:item.id, title:item.title}}}>{item.title}</Link>&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  &nbsp;<button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                  &nbsp;<button onClick={() => this.replaceShow(item.id, item.title)}>replace查看</button>

                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/*<Route path="/home/messages/detail/:id/:title" component={Detail}/>*/}

        {/* search参数无需声明接收，正常注册路由即可 */}
        {/*<Route path="/home/messages/detail" component={Detail}/>*/}

        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/messages/detail" component={Detail}/>

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>

      </div>
    );
  }
}

export default Messages;