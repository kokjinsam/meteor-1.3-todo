/**
 * Line below won't work because Meteor forbids
 * importing stuffs from the server. If you want
 * to import stuffs from the server, see L30 below.
 */
// import hiddenFunc from '/imports/server/libs/test';

export default function ({ Meteor, Collections }) {
  Meteor.methods({
    'todo.create'(todo) {
      /**
       * Don't use Meteor.isClient since the code
       * might be running on the server. this.isSimulation
       * is much reliable way to run a stub.
       */
      if (this.isSimulation) {
        return Collections.Todos.insert({
          todo,
          createdAt: new Date(),
          completed: false,
        });
      }

      /**
       * keep in mind that whatever is inside
       * Meteor.isServer will still be sent down to
       * client.
       */
      if (Meteor.isServer) {
        /**
         * This is how you include a file from the server
         * without exposing it on the client.
         * Try to find `/imports/server/libs/test` on
         * your devtool. Tadaa. Nothin.
         */
        // const hiddenFunc = require('/imports/server/libs/test').default;
        // hiddenFunc();

        /**
        * To demonstrate latency compensation,
        * remove in production
        */
        Meteor._sleepForMs(5000);

        return Collections.Todos.insert({
          todo,
          createdAt: new Date(),
          completed: false,
        });
      }

      return undefined;
    },
  });

  Meteor.methods({
    'todo.completed'(todoId) {
      if (Meteor.isServer) {
        Meteor._sleepForMs(5000);

        Collections.Todos.upsert({
          _id: todoId,
        }, {
          $set: {
            completed: true,
          },
        });
      }
    },
  });
}
