import gql from 'apollo-client/gql';

export default {
  addTodo({ Client }) {
    Client.mutate({
      mutation: gql`
        mutation createTodo($todo: String) {
          createTodo(todo: $todo)
        }`,
      variables: {
        todo: 'some todo',
      },
    }).then((graphQLResult) => {
      const { errors, data } = graphQLResult;

      if (data) {
        console.log('got data', data);
      }

      if (errors) {
        console.log('got some GraphQL execution errors', errors);
      }
    }).catch((ex) => {
      console.log('there was an error sending the query', ex);
    });
  },
};
