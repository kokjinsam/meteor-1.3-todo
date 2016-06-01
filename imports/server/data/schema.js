// import todosSchema from '../schemas/todos';

const rootSchema = [`
  type Todo {
    _id: String!
    todo: String!
    createdAt: String
    completed: Boolean
  }

  type Query {
    allTodos: [Todo]
  }

  type Mutation {
    createTodo(todo: String): Todo
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

export default [...rootSchema];
