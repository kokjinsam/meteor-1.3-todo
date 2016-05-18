import React from 'react';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import { setTitle, addMetas, addLinks, addMeta } from 'komorebi-utils/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import ConsoleErrorReporter from './components/console-error-reporter';

let localFlowRouter;
export default function (injectDeps, { FlowRouter, Client, Store }) {
  localFlowRouter = FlowRouter;

  const TrioLayoutCtx = (props) => {
    const TrioLayout = require('./components/layout.trio').default;
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

      const TodosPage = require('./containers/todos-page').default;
      mount(TrioLayoutCtx, {
        store: Store,
        client: Client,
        topNavigation: () => (<p>Top navigation</p>),
        content: () => (<TodosPage />),
        footer: () => (<p>Footer</p>),
      });
    },
  });
}

if (module.hot) {
  module.hot.accept([
    './components/layout.trio',
    './containers/todos-page',
  ], () => {
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}
