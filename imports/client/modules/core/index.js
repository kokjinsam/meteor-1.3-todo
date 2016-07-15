import actions from './actions';
import routes from './routes';
import reducers from './reducers';
import constants from './constants';

export default {
  routes,
  actions,
  reducers,

  /**
   * exporting constants because I might add
   * feature to mantra-plus that lets you
   * use these constants anywhere in your app
   */
  constants,
};
