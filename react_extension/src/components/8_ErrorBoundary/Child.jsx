import React, {Component} from 'react';

class Parent extends Component {

  state = {
    // users: [
    //   {id: '001', name: 'tom', age: 18},
    //   {id: '002', name: 'jack', age: 19},
    //   {id: '003', name: 'peiqi', age: 20},
    // ],
    users: 'asd'
  }

  render() {
    return (
      <div>
        <h2>我是child组件</h2>
        {
          this.state.users.map( item => {
            return <h4 key={item.id}>{item.name}------{item.age}</h4>
          })
        }
      </div>
    );
  }
}

export default Parent;