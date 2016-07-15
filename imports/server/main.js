import configureGraphQLServer from './configs/configure-server';
import schema from './data/schema';
import resolvers from './data/resolvers';
import seed from './configs/seed';

configureGraphQLServer({
  schema,
  resolvers,
});

seed();
