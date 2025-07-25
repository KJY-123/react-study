import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Messages from "./Messages";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink replace to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink replace to="/home/messages">Messages</MyNavLink>
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