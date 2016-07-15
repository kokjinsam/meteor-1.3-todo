import 'react-hot-loader/patch';
import { createApp } from './libs/mantra-plus';
import initContext from './configs/context';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import redux from './libs/mantra-redux';
import { configureGraphQLClient } from './libs/mantra-apollo';

// modules
import coreModule from './modules/core';

const Client = configureGraphQLClient();
const logger = createLogger();
const middlewares = [
  thunk,
  Client.middleware(),
];

// add redux logger in dev mode only - for full time logging add 'logger,' in middlewares[] above
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const reducers = {
  apollo: Client.reducer(),
};

// create app
const context = initContext({ Client });
const app = createApp(context);

app.loadMiddlewares([
  redux({
    reducers,
    middlewares,
  }),
]);

app.loadModule(coreModule);
app.init();
