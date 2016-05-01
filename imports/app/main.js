import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

// combine all module reducers
const coreReducers = coreModule.reducers;
const reducers = {
  ...coreReducers,
};

// init context
const context = initContext({ reducers });

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
