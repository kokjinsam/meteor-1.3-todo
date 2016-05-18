import React, { PropTypes } from 'react';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
  })),
};

const TodoList = ({
  todos,
}) => (
  <div>
    <If condition={todos}>
      <If condition={todos.length === 0}>
        <h1>Uh oh, no todos</h1>
      <Else />
        <ul>
        {
          todos.map((todo) => (
            <li key={todo._id}>{todo.todo} - {todo._id}</li>
          ))
        }
        </ul>
      </If>
    <Else />
      <p>Something is wrong</p>
    </If>
  </div>
);

TodoList.propTypes = propTypes;

export default TodoList;
