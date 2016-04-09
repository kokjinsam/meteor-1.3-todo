import configureNavigator from './configs/navigator';
import configureFlowRouter from './configs/flow-router-ssr';
import seed from './configs/seed';
import publications from './publications';
import methods from './methods';

configureFlowRouter();
configureNavigator();
seed();
publications();
methods();
