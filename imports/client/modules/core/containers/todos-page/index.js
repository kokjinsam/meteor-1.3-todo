import TodosPage from '../../pages/todos';
import composeWithQuery from 'react-komposer-query';
import { useDeps, composeAll } from 'mantra-core';

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
  composeWithQuery(options, resultMapper),
  useDeps(mapDepsToProps)
)(TodosPage);
