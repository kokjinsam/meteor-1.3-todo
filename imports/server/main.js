import configureNavigator from './configs/navigator';
import configureFlowRouter from './configs/flow-router-ssr';
import configureGraphQL from './configs/graphql';
import seed from './configs/seed';

configureFlowRouter();
configureNavigator();
configureGraphQL();
seed();
