import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default function ({ Client }) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Client,
  };
}
