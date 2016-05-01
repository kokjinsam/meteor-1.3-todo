const mapQueriesToProps = ({ context }, onData) => {
  const { Client } = context();

  Client.query({
    query: `
      {
        allTodos {
          _id
          todo
          createdAt
        }
      }
    `,
  }).then((graphQLResult) => {
    const { errors, data } = graphQLResult;

    if (data) {
      console.log('got data');
      onData(null, {
        todos: data.allTodos,
      });
    }

    if (errors) {
      console.log('got some GraphQL execution errors', errors);
      onData(null, {
        errors,
      });
    }
  }).catch((error) => {
    console.log('there was an error sending query', error);
    onData(null, {
      errors: error,
    });
  });
};

export default mapQueriesToProps;
