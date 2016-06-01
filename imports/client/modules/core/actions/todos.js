import apollo from '../../../libs/apollo';
import { Random } from 'meteor/random';

export default {
  addTodo({ Client }) {
    const options = {
      mutation: `
        mutation createTodo {
          createTodo(todo: "new todo ${Random.id()}") {
            _id
            todo
          }
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
