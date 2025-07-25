import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom'

function Message() {
  const [msg, setMsg] = useState([
    {id: 1, title: '消息1', content:'锄禾日当午'},
    {id: 2, title: '消息2', content:'汗滴禾下土'},
    {id: 3, title: '消息3', content:'谁知盘中餐'},
    {id: 4, title: '消息4', content:'粒粒皆辛苦'},
  ]);
  return (
    <div>
      <ul>
        {
          msg.map(item => {
            return (
              // 路由链接
              <li key={item.id}>
                <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}----{item.content}</Link>&nbsp;&nbsp;
              </li>
            )
          })
        }
      </ul>
      {/* 指定路由组件展示位置 */}
      <Outlet/>
    </div>
  );
}

export default Message;