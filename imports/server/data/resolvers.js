import { Todos } from '../../lib/collections';

const resolvers = {
  Query: {
    allTodos(root, args) {
      return Todos.find().fetch();
    },
  },
};

export default resolvers;
