import configureGraphQL from './configs/graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';
import seed from './configs/seed';

configureGraphQL({
  schema,
  resolvers,
});

seed();
