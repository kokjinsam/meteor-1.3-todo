const typeDefinitions = `
  type Todos {
    _id: String
    todo: String
    createdAt: String
    completed: Boolean
  }

  type RootQuery {
    allTodos: [Todos]
  }

  type RootMutation {
    createTodo (todo: String): String
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default typeDefinitions;
