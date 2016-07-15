import React, { PropTypes } from 'react';
import Todo from '../Todo';

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
            <Todo
              key={todo._id}
              todo={todo}
            />
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
