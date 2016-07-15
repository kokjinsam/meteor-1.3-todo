import React from 'react';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import { setTitle, addMetas, addLinks, addMeta } from '../../libs/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import ConsoleErrorReporter from './components/ConsoleErrorReporter';

let localFlowRouter;
export default function (injectDeps, { FlowRouter }) {
  localFlowRouter = FlowRouter;

  const TrioLayoutCtx = (props) => {
    const TrioLayout = require('./components/TrioLayout').default;
    const FullTrioLayout = injectDeps(TrioLayout);
    return (
      <AppContainer errorReport={ConsoleErrorReporter}>
        <FullTrioLayout {...props} />
      </AppContainer>
    );
  };

  FlowRouter.route('/', {
    name: 'hello',
    action() {
      setTitle('Simple Todo');
      addMetas(defaultMetas);
      addLinks(defaultLinks);
      addMeta({
        name: 'description',
        content: 'woohooo',
      });

      const TodosPage = require('./containers/TodosPage').default;
      mount(TrioLayoutCtx, {
        topNavigation: () => (<p>Top navigation</p>),
        content: () => (<TodosPage />),
        footer: () => (<p>Footer</p>),
      });
    },
  });

  FlowRouter.route('/test', {
    name: 'test',
    action() {
      setTitle('Test');
      addMetas(defaultMetas);
      addLinks(defaultLinks);
      addMeta({
        name: 'description',
        content: 'woohooo',
      });

      mount(TrioLayoutCtx, {
        topNavigation: () => (<p>Top navigation</p>),
        content: () => (<p>Test</p>),
        footer: () => (<p>Footer</p>),
      });
    },
  });
}

if (module.hot) {
  module.hot.accept([
    './components/TrioLayout',
    './containers/TodosPage',
  ], () => {
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}
