import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

export default function () {
  if (Meteor.isServer) {
    const { Route } = FlowRouter;
    const originalBuildContext = Route.prototype._buildContext;

    Route.prototype._buildContext = function buildContext(...args) {
      const context = originalBuildContext.apply(this, args);

      global.navigator = {
        userAgent: context._serverRequest.headers['user-agent'],
      };

      return context;
    };
  }
}
