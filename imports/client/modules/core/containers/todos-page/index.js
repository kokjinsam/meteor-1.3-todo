import TodosPage from '../../pages/todos';
// import composeWithQuery from 'react-komposer-query';
import { useDeps, compose, composeAll } from 'mantra-core';
import gql from 'apollo-client/gql';

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

const mapDepsToProps = (context, actions) => {
  const {
    addTodo,
  } = actions.todos;

  return {
    addTodo,
    context: () => context,
  };
};

export default composeAll(
  // composeWithQuery(options, resultMapper),
  compose(mapQueryToProps),
  useDeps(mapDepsToProps)
)(TodosPage);
