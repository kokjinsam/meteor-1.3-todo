import { Todos } from '../../lib/collections';

export default function () {
  console.log('should be hidden from client');
}

function getTodos() {
  return Todos.find(
    {},
    {
      sort: {
        createdAt: -1,
      },
    }).fetch();
}

export {
  getTodos,
};
