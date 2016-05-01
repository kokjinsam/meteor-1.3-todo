import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import userMiddleware from './useraccount';

export default function ({ reducers }) {
  const url = Meteor.absoluteUrl('graphql');
  const networkInterface = createNetworkInterface(url);
  /*
  networkInterface.use([{
    applyMiddleware(request, next) {
      userMiddleware(request, next);
    },
  }]);
  */
  const Client = new ApolloClient({
    networkInterface,
  });
  const reducer = combineReducers({
    ...reducers,
    apollo: Client.reducer(),
  });
  const logger = createLogger();
  const Store = createStore(
    reducer,
    applyMiddleware(
      thunk,
      logger,
      Client.middleware(),
    )
  );

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
