const typeDefinitions = `
type Query {
 allTodos: [Todos]
}
schema {
  query: Query
}
type Todos {
  _id: String
  todo: String
  createdAt: String
  completed: Boolean
}
`;

export default [typeDefinitions];
