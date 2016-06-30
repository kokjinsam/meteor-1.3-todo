import 'react-hot-loader/patch';
import { createApp } from './libs/mantra-plus';
import initContext from './configs/context';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import redux from 'mantra-redux';
// import apollo from 'mantra-apollo';
import configureGraphQLClient from './libs/configure-client';

// modules
import coreModule from './modules/core';

const Client = configureGraphQLClient();
const logger = createLogger();
const middlewares = [
  thunk,
  logger,
  Client.middleware(),
];

const reducers = {
  apollo: Client.reducer(),
};

// create app
const context = initContext({ Client });
const app = createApp(context);

app.loadMiddlewares([
  // apollo(),
  redux({
    reducers,
    middlewares,
  }),
]);

app.loadModule(coreModule);
app.init();
