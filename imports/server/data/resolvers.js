import { Todos } from '../../lib/collections';

const resolvers = {
  RootQuery: {
    async allTodos() {
      return Todos.find().fetch();
    },
  },
  RootMutation: {
    async createTodo(_, { todo }) {
      const createdAt = new Date();
      const newTodoID = Todos.insert({
        todo,
        createdAt,
        completed: false,
      });

      return [newTodoID];
    },
  },
};

export default resolvers;
