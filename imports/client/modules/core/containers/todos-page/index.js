import TodosPage from '../../pages/todos';
import composeWithQueries from 'react-komposer-queries';
import { useDeps, composeAll } from 'mantra-core';

const query = `
  allTodos {
    _id
    todo
    createdAt
  }
`;

const dataMapper = ({
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
  composeWithQueries(query, dataMapper),
  useDeps(mapDepsToProps)
)(TodosPage);
