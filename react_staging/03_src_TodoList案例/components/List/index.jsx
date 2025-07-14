import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

class List extends Component {

  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }


  render() {
    const {todos, updateTodo, deleteTodo} = this.props
    return (
      <div className="todo-main">
        {
          todos.map((todo, index) => {
            return <Item key={todo.id} {...todo} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </div>
    );
  }
}

export default List;