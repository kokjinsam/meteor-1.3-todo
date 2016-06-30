import { configureGraphQLServer } from 'apollo-tools';
import schema from './data/schema';
import resolvers from './data/resolvers';
import seed from './configs/seed';

configureGraphQLServer({
  schema,
  resolvers,
});

seed();
