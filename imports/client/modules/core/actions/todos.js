import apollo from '../../../libs/apollo';
import { Random } from 'meteor/random';

export default {
  addTodo({ Client }) {
    const options = {
      mutation: `
        mutation createTodo {
          createTodo(todo: "whut new todo ${Random.id()}")
        }
      `,
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
