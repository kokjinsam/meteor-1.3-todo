import { Todos } from '../../lib/collections';

const rootResolvers = {
  Query: {
    async allTodos() {
      return Todos.find().fetch();
    },
  },
  Mutation: {
    async createTodo(_, { todo }) {
      const createdAt = new Date();
      Todos.insert({
        todo,
        createdAt,
        completed: false,
      });
      return todo;
    },
  },
};

export default rootResolvers;
