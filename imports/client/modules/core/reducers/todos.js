import {
  TODO_SAVED,
  TODO_SAVING,
  TODO_CHECKED,
  TODO_CHECKING,
} from '../constants';

const defaultState = {
  saving: false,
  checking: false,
};

function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case TODO_SAVED:
      return {
        ...state,
        saving: false,
      };
    case TODO_SAVING:
      return {
        ...state,
        saving: true,
      };
    case TODO_CHECKING:
      return {
        ...state,
        checking: true,
      };
    case TODO_CHECKED:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
}


export default todosReducer;
