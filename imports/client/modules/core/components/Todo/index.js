import React, { PropTypes } from 'react';

const propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
  }),
};

const Todo = ({
  todo,
}) => (
  <li
    style={{
      padding: '1.6rem',
    }}
    key={todo._id}
  >
    {todo.todo} - {todo._id}
  </li>
);

Todo.propTypes = propTypes;

export default Todo;
