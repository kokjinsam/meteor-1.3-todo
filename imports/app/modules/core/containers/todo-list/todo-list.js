import TodoList from '../../components/todo-list';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections, Store } = context();

  let todos;
  if (Meteor.subscribe('todo.list').ready()) {
    todos = Collections.Todos.find({}, {
      sort: {
        completed: false,
        createdAt: -1,
      },
    }).fetch();
  } else {
    todos = Collections.Todos.find({}, {
      sort: {
        completed: false,
        createdAt: -1,
      },
    }).fetch();
    if (todos) {
      onData(null, {
        todos,
        isSaving: Store.getState().todos.saving,
        isChecking: Store.getState().todos.checking,
      });
    } else {
      onData();
    }
  }

  onData(null, {
    todos,
    isSaving: Store.getState().todos.saving,
    isChecking: Store.getState().todos.checking,
  });

  return Store.subscribe(() => {
    onData(null, {
      todos,
      isSaving: Store.getState().todos.saving,
      isChecking: Store.getState().todos.checking,
    });
  });
};

export const depsMapper = (context, actions) => {
  const {
    addTodo,
    checkTodo,
  } = actions.todos;

  const onClickAddButton = (todo) => {
    addTodo(todo);
  };

  const onClickCheckBtn = (todoId) => {
    checkTodo(todoId);
  };

  return {
    onClickAddButton,
    onClickCheckBtn,
    context: () => context,
  };
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TodoList);
