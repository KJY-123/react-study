import React, {Component} from 'react';
import './index.css';

class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
    return (
      <div className="row" style={{margin: 0}}>
        {
          isFirst ? <h2>欢迎访问</h2> : isLoading ? <h2>正在加载中...</h2> : err ? <h2 style={{color: 'red'}}>{err}</h2> :
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