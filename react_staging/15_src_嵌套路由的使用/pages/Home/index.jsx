import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Messages from "./Messages";

class Home extends Component {
  render() {
    console.log('Home路由组件收到的props', this.props)
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/messages">Messages</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/messages" component={Messages} />
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;