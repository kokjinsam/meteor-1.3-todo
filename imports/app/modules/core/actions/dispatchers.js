import {
  TODO_SAVING,
  TODO_SAVED,
  TODO_CHECKING,
  TODO_CHECKED,
} from './types.js';

export default {
  savingTodo() {
    return {
      type: TODO_SAVING,
    };
  },
  savedTodo() {
    return {
      type: TODO_SAVED,
    };
  },
  checkingTodo() {
    return {
      type: TODO_CHECKING,
    };
  },
  checkedTodo() {
    return {
      type: TODO_CHECKED,
    };
  },
};
