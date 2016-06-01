import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { addTypenameToSelectionSet } from 'apollo-client/queries/queryTransform';

function configureGraphQLClient(options = {}) {
  const Meteor = Package['meteor'].Meteor;
  const Accounts = Package['accounts-base'].Accounts;

  if (!Meteor) {
    const error = 'Meteor package is missing';
    throw new Error(error);
  }

  if (!Accounts) {
    const error = 'accounts-base package is missing';
    throw new Error(error);
  }

  const {
    urlName = 'graphql',
    auth = false,
    ...others,
  } = options;

  /* eslint-disable no-underscore-dangle */
  // this is important for SSR;
  const fullUrl = Meteor.absoluteUrl(urlName);
  const _networkInterface = createNetworkInterface(fullUrl);

  // this part is from meteor-integration
  if (auth) {
    _networkInterface.use([{
      applyMiddleware(request, next) {
        const currentUserToken = Accounts._storedLoginToken();

        if (!currentUserToken) {
          next();
          return;
        }

        if (!request.options.headers) {
          /* eslint-disable no-param-reassign */
          request.options.headers = new Headers();
        }

        request.options.headers.MeteorLoginToken = currentUserToken;

        next();
      },
    }]);
  }

  const Client = new ApolloClient({
    networkInterface: _networkInterface,
    queryTransformer: addTypenameToSelectionSet,
    dataIdFromObject: (result) => {
      if (result._id && result.__typename) {
        return result.__typename + result._id;
      }
    },
    ...others,
  });

  return Client;
}

export default configureGraphQLClient;
