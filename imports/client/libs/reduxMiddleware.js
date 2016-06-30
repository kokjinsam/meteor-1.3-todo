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

function reduxMiddleware(options) {
  const {
    reducers = {},
    middlewares = [],
    storeName = 'Store',
  } = options;

  return {
    moduleWillLoad(module) {
      if (module.reducers) {
        if (typeof reducers !== 'object' || typeof module.reducers !== 'object') {
          const message = "Module's reducers field should be a map of reducers.";
          throw new Error(message);
        }

        const allReducers = {
          ...module.reducers,
          ...reducers,
        };

        this._reduxReducers = allReducers;
      }
    },
    moduleWillInit() {
      let allReducers = this._reduxReducers;
      let allMiddlewares = [...middlewares];

      if (this._apolloReducer) {
        allReducers = {
          ...allReducers,
          apollo: this._apolloReducer,
        };
      }

      if (this._apolloMiddleware) {
        allMiddlewares = [
          ...allMiddlewares,
          this._apolloMiddleware,
        ];
      }

      const reduxStore = createReduxStore({
        reducers: allReducers,
        middlewares: allMiddlewares,
      });

      this.context[storeName] = reduxStore;
      this.context.dispatch = reduxStore.dispatch;
    },
  };
}

export default reduxMiddleware;
