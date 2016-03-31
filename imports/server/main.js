import configureRadium from './configs/radium';
import configureFlowRouter from './configs/flow-router-ssr';
import seed from './configs/seed';
import publications from './publications';
import methods from './methods';

configureFlowRouter();
configureRadium();
seed();
publications();
methods();
