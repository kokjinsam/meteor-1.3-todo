// import todosSchema from '../schemas/todos';

const rootSchema = [`
  type Todos {
    id: Int!
    _id: String
    todo: String
    createdAt: String
    completed: Boolean
  }

  type Query {
    allTodos: [Todos]
  }

  type Mutation {
    createTodo(todo: String): String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

export default [...rootSchema];
