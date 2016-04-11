import TodoList from '../../components/todo-list';
import { useDeps, compose, composeWithTracker, composeAll } from 'mantra-core';

export const collectionComposer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

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
      onData(null, { todos });
    } else {
      onData();
    }
  }

  onData(null, { todos });
  return;
};

export const stateComposer = ({ context }, onData) => {
  const { Store } = context();

  const unsubscribe = Store.subscribe(() => {
    onData(null, {
      isSaving: Store.getState().todos.saving,
      isChecking: Store.getState().todos.checking,
    });
  });

  onData(null, {
    isSaving: Store.getState().todos.saving,
    isChecking: Store.getState().todos.checking,
  });

  const cleanUp = () => {
    unsubscribe();
  };

  return cleanUp;
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
  composeWithTracker(collectionComposer),
  compose(stateComposer),
  useDeps(depsMapper)
)(TodoList);
