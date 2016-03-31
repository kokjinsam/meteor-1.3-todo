import actions from './actions';
import routes from './routes';
import reducers from './reducers';
import methods from './methods';

export default {
  routes,
  actions,
  reducers,
  load(context) {
    methods(context);
  },
};
