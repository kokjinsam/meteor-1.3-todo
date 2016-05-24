import configureGraphQL from './configs/graphql';
// import { configureGraphQLServer } from 'apollo-tools';
// import schema from './configs/schema';
// import resolvers from './configs/resolvers';
import seed from './configs/seed';

configureGraphQL();
/*
configureGraphQLServer({
  schema,
  resolvers,
});
*/
seed();
