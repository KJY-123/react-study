import React, {Component} from 'react';
import Item from '../Item';
import './index.css';

class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <div className="todo-main">
        {
          todos.map((todo, index) => {
            return <Item key={index} {...todo} index={index}/>
          })
        }
      </div>
    );
  }
}

export default List;