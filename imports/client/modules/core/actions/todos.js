import apollo from 'apollo-tools';
import { Random } from 'meteor/random';

export default {
  addTodo({ Client }) {
    const options = {
      mutation: `
        mutation createTodo($todo: String) {
          createTodo(todo: $todo)
        }
      `,
      variables: {
        todo: `new todo ${Random.id()}`,
      },
    };

    apollo(Client).mutateWith(options, (err, res) => {
      if (err) {
        console.log(err);
      }

      if (res) {
        console.log(res);
      }
    });
  },
};
