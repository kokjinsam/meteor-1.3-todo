import { Todos } from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { StaticSubs } from 'meteor/ouk:static-subs';
import { _ } from 'meteor/underscore';

export default function () {
  Meteor.publish('todo.list', function() {
    const self = this;
    const todos = Todos.find(
      {},
      {
        sort: {
          createdAt: -1,
        },
      }
    ).fetch();

    _.each(todos, (todo) => {
      self.added('todos', todo._id, todo);
    });

    self.ready();
    self.stop();
  });

  StaticSubs.publish('todo.static', () => (
    Todos.find(
      {},
      {
        sort: {
          createdAt: -1,
        },
      }
    )
  ));
}
