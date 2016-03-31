import { Meteor } from 'meteor/meteor';
import { Todos } from '../../lib/collections';

export default function () {
  Meteor.startup(() => {
    if (!Todos.findOne()) {
      for (let x = 1; x <= 5; x++) {
        const todo = `This is todo ${x}`;
        const createdAt = new Date();
        Todos.insert({
          todo,
          createdAt,
          completed: false,
        });
      }
    }
  });
}
