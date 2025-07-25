import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes'
import Header from './components/Header'

function App() {
  // 根据路由表生成对应的路由
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header/>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={({isActive}) => `list-group-item ${isActive ? 'atguigu' : ''}`} to="/about">About</NavLink>
            <NavLink className={({isActive}) => `list-group-item ${isActive ? 'atguigu' : ''}`} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;