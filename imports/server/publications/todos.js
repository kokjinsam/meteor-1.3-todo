import { Todos } from '../../lib/collections';
import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.publish('todo.list', () => (
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
