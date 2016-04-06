import React, { PropTypes } from 'react';
import NoSSR from 'react-no-ssr';
import useSheet from 'react-jss';
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
  sheet,
}) => {
  const { classes } = sheet;

  return (
  <NoSSR>
    <div>
      <TodoInput onClickAddButton={onClickAddButton} />
      <If condition={isSaving}>
        <div className={classes.loading}>
          saving todo...
        </div>
      </If>
      <If condition={isChecking}>
        <div className={classes.loading}>
          checking todo...
        </div>
      </If>
      <ul className={classes.list}>
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
  </NoSSR>
  );
};

TodoList.propTypes = {
  ...privatePropTypes,
};

export default useSheet(TodoList, styles);
