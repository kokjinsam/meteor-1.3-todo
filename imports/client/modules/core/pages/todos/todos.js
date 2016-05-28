import React, { PropTypes } from 'react';
import TodoList from '../../components/todo-list';

const propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

const TodosPage = ({
  todos,
  addTodo,
}) => (
  <div>
    <a href="/test">test</a>
    <TodoList todos={todos} />
    <button onClick={addTodo}>Add todo</button>
  </div>
);

TodosPage.propTypes = propTypes;

export default TodosPage;
