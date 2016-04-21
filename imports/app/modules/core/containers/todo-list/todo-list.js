import TodoList from '../../components/todo-list';
import { useDeps, compose, composeWithTracker, composeAll } from 'mantra-core';
import { StaticSubs } from 'meteor/ouk:static-subs';

export const collectionComposer = ({ context }, onData) => {
  const { Meteor, Collections, Tracker } = context();
  /*
  (async function() {
    const todos = await Meteor.callPromise('publication.test');

    onData(null, {
      todos,
    });
  }());
  */
  /*
  Meteor.call('publication.test', (err, res) => {
    if (err) {
      console.log(err);
    }

    if (res) {
      res.forEach(item => {
        Collections.Todos.insert(item);
      });
    }
  });

  const todos = Collections.Todos.find({}).fetch();
  if (todos) {
    onData(null, {
      todos,
    });
  } else {
    onData(null, {});
  }
  */

  /*
  const handle = Tracker.autorun(() => {
    Meteor.subscribe('todo.list');
  });

  handle.stop();
  const todos = Collections.Todos.find({}, {
    sort: {
      completed: false,
      createdAt: -1,
    },
  }).fetch();
  onData(null, { todos });
  */
  /*
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
  */
  /*
  const sub = StaticSubs.subscribe('todo.static');

  Tracker.autorun(() => {
    if (sub.ready()) {
      const todos = Collections.Todos.find({}, {
        sort: {
          completed: false,
          createdAt: -1,
        },
      }).fetch();

      onData(null, {
        todos,
      });
    } else {
      onData();
    }
  });
  */
  /*
  const handle = Meteor.subscribe('todo.list');

  const todos = Collections.Todos.find({}, {
    sort: {
      completed: false,
      createdAt: -1,
    },
  }).fetch();
  onData(null, {
    todos,
  });
  */
  // undefined method stop()
  // handle.stop();
  /*
  Meteor.call('publication.test', (err, res) => {
    if (err) {
      console.log(err);
    }

    if (res) {
      if (Meteor.isClient) {
        res.forEach(item => {
          Collections.TodosCache.insert(item);
        });
      }
    }
  });

  const todos = Collections.TodosCache.find({}, {
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

  onData(null, {
    todos,
  });
  */
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
