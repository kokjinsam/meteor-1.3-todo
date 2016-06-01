function configureGraphQLServer(options = {}) {
  /* eslint-disable global-require*/
  const express = require('express');
  const apolloServer = require('apollo-server').apolloServer;
  const proxyMiddleware = require('http-proxy-middleware');

  const Meteor = Package['meteor'].Meteor;
  const Accounts = Package['accounts-base'].Accounts;
  const WebApp = Package['webapp'].WebApp;
  const check = Package['check'].check;

  if (!Meteor) {
    const error = 'Meteor package is missing';
    throw new Error(error);
  }

  if (!Accounts) {
    const error = 'accounts-base package is missing';
    throw new Error(error);
  }

  if (!WebApp) {
    const error = 'Webapp package is missing';
    throw new Error(error);
  }

  if (!check) {
    const error = 'check package is missing';
    throw new Error(error);
  }

  const {
    schema,
    resolvers,
    port = 4000,
    urlName = 'graphql',
    graphiql = true,
    pretty = true,
    context = {},
    ...others,
  } = options;

  const graphQLServer = express();
  const GRAPHQL_PORT = port;

  graphQLServer.use(`/${urlName}`, apolloServer(async (req) => {
    let userId = null;

    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-param-reassign */
    if (req.headers.meteorlogintoken) {
      const token = req.headers.meteorlogintoken;
      check(token, String);
      const hashedToken = Accounts._hashLoginToken(token);

      // Get the user from the database
      const user = await Meteor.users.findOne({
        'services.resume.loginTokens.hashedToken': hashedToken,
      }, {
        fields: {
          _id: 1,
          'services.resume.loginTokens.$': 1,
        },
      });

      if (user) {
        const expiresAt = user.services.resume.loginTokens[0].when;
        const isExpired = expiresAt < Date.now(); // TODO or new Date()

        if (!isExpired) {
          userId = user._id;
        }
      }
    }

    return {
      graphiql,
      pretty,
      schema,
      resolvers,
      context: {
        ...context,
        userId,
      },
      ...others,
    };
  }));

  graphQLServer.listen(GRAPHQL_PORT, () => console.log(`
    GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}
    Checkout http://localhost:${GRAPHQL_PORT}/${urlName} to use GraphiQL
  `));

  WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
}

export default configureGraphQLServer;
