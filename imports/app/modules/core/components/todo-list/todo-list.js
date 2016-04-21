import React, { PropTypes } from 'react';
import { wrapStyle } from '../../../../libs/radium';
import TodoInput from './todo-input';
import TodoItem from './todo-item';
import { Meteor } from 'meteor/meteor';
import styles from './styles';
import { TodosCache } from '/imports/lib/collections';

const privatePropTypes = {
  todos: PropTypes.array.isRequired,
  onClickAddButton: PropTypes.func.isRequired,
  onClickCheckBtn: PropTypes.func.isRequired,
  isSaving: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
};

class TodoList extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    const {
      todos,
      isSaving,
      isChecking,
      onClickAddButton,
      onClickCheckBtn,
    } = this.props;

    return (
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
  }
}

TodoList.propTypes = {
  ...privatePropTypes,
};

export default wrapStyle(TodoList);
