import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function ({ reducer }) {
  const Store = createStore(reducer, applyMiddleware(thunk));

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Store,
    dispatch: Store.dispatch,
  };
}
