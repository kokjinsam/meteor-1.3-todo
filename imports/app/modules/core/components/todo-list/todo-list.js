import React, { PropTypes } from 'react';
import { wrapStyle } from '/imports/app/libs/radium';
import TodoInput from './todo-input';
import TodoItem from './todo-item';

import styles from './styles';

const privatePropTypes = {
  todos: PropTypes.array.isRequired,
  onClickAddButton: PropTypes.func.isRequired,
  onClickCheckBtn: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
};

const TodoList = ({
  todos,
  isSaving,
  isChecking,
  onClickAddButton,
  onClickCheckBtn,
}) => (
  <div>
    <TodoInput onClickAddButton={onClickAddButton} />
    <If condition={isSaving}>
      <div style={styles.loading}>
        saving todo...
      </div>
    </If>
    <If condition={isChecking}>
      <div style={styles.loading}>
        checking todo...
      </div>
    </If>
    <ul style={styles.list}>
      {
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            id={todo._id}
            completed={todo.completed}
            onClickCheckBtn={onClickCheckBtn}
            title={todo.todo}
          />
        ))
      }
    </ul>
  </div>
);

TodoList.propTypes = {
  ...privatePropTypes,
};

export default wrapStyle(TodoList);
