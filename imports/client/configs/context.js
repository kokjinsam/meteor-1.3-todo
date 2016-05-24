import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { configureGraphQLClient } from 'apollo-tools';

export default function ({ reducers }) {
  const Client = configureGraphQLClient({
    url: '/graphql',
    auth: false,
  });
  const reducer = combineReducers({
    ...reducers,
    apollo: Client.reducer(),
  });
  const logger = createLogger();

  // put all redux middlewares here
  const middlewares = [
    thunk,
    logger,
    Client.middleware(),
  ];

  const Store = createStore(reducer, applyMiddleware(...middlewares));

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Store,
    Client,
    dispatch: Store.dispatch,
  };
}
