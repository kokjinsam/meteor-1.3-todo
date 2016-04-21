import { Meteor } from 'meteor/meteor';
import { Todos } from '../../lib/collections';

/**
 * server only meteor methods
 * no latency Compensation
 */
export default function () {
  Meteor.methods({
    'publication.test'() {
      console.log('test');
      return Todos.find(
        {},
        {
          sort: {
            createdAt: -1,
          },
        }).fetch();
    },
  });
}
