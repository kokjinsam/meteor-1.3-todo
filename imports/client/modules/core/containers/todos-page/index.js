import TodosPage from '../../pages/todos';
import composeWatchQuery from 'react-komposer-watchQuery';
import { useDeps, composeAll } from 'mantra-core';

const options = {
  query: `
    allTodos {
      _id
      todo
      createdAt
    }
  `,
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
  composeWatchQuery(options, resultMapper),
  useDeps(mapDepsToProps)
)(TodosPage);
