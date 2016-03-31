import dispatchers from './dispatchers';

export default {
  addTodo({ Meteor, dispatch }, todo) {
    // this is latency compensated
    Meteor.apply(
      'todo.create',
      [todo],
      { returnStubValue: true },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    return;

    /*
    // this is not latency compensated
    dispatch(dispatchers.savingTodo());
    Meteor.call('todo.create', todo, (err) => {
      if (err) {
        console.log(err);
      } else {
        dispatch(dispatchers.savedTodo());
      }
    });

    return;
    */
  },

  checkTodo({ Meteor, dispatch }, todoId) {
    dispatch(dispatchers.checkingTodo());
    Meteor.call('todo.completed', todoId, (err) => {
      if (err) {
        console.log(err);
      } else {
        dispatch(dispatchers.checkedTodo());
      }
    });
  },
};
