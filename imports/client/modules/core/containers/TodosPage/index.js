import TodosPage from '../../components/TodosPage';
// import composeWithQuery from 'react-komposer-query';
import { compose, composeAll } from 'react-komposer-plus';
import { useDeps } from 'mantra-plus';
import gql from 'graphql-tag';

/**
 * this is how we use apollo query without
 * react-apollo or react-komposer-query
 *
 */

const mapQueryToProps = ({ context }, onData) => {
  const { Client } = context();

  const query = `
    query todos {
      allTodos {
        _id
        todo
        createdAt
      }
    }
  `;

  const taggedQuery = gql`${query}`;

  Client.query({
    query: taggedQuery,
    forceFetch: true,
  }).then((graphQLResult) => {
    onData(null, {
      todos: graphQLResult.data.allTodos,
      errors: graphQLResult.errors,
    });
  }).catch((ex) => {
    onData(ex);
  });
};


/**
 * code below uses react-komposer-query as a
 * replacement of code above
 */

/*
const options = {
  query: `
    query todos {
      allTodos {
        _id
        todo
        createdAt
      }
    }
  `,
  forceFetch: true,
};


const resultMapper = ({
  data,
  errors,
}) => {
  const {
    allTodos,
  } = data;

  return {
    todos: allTodos,
    errors,
  };
};
*/

const mapDepsToProps = (context, actions) => ({
  addTodo: actions.todos.addTodo,
  context: () => context,
});

export default composeAll(
  // composeWithQuery(options, resultMapper),
  compose(mapQueryToProps),
  useDeps(mapDepsToProps)
)(TodosPage);
