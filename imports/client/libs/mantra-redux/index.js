/**
 * this is exported to an NPM package, mantra-redux
 */
import createReduxStore from './createReduxStore';

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
          ...this._reduxReducers,
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
