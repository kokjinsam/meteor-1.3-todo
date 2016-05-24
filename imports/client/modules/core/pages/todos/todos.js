import React, { Component, PropTypes } from 'react';
import TodoList from '../../components/todo-list';

const propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

class TodosPage extends Component {
  render() {
    const {
      todos,
      addTodo,
    } = this.props;

    return (
      <div>
        <TodoList todos={todos} />
        <button onClick={addTodo}>Add todo</button>
      </div>
    );
  }
}

TodosPage.propTypes = propTypes;

export default TodosPage;
