import React, { Component, lazy, Suspense } from 'react';
import { Link, Route } from 'react-router-dom'

// import Home from "./Home";
// import About from "./About";
import Loading from './Loading'

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

class Demo extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/*<a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a>*/}

              {/* 在React中靠路由链接实现切换组件 */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item active" to="/home">Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading/>}>
                  {/* 注册路由 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;