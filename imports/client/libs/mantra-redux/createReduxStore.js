import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

function createReduxStore(options) {
  const {
    reducers = {},
    middlewares = [],
  } = options;

  if (!createStore || !combineReducers || !applyMiddleware) {
    const error = 'Redux is missing. Please install Redux, npm install --save redux';
    throw new Error(error);
  }

  if (Object.keys(reducers).length > 0) {
    const combinedReducers = combineReducers(reducers);
    const Store = createStore(
      combinedReducers,
      applyMiddleware(...middlewares)
    );

    return Store;
  }

  return null;
}

export default createReduxStore;
