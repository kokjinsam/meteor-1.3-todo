import React from 'react';
import { mount } from '../../libs/mounter';
import { StyleSheet } from 'aphrodite';
import { AppContainer } from 'react-hot-loader';

import { setTitle, addMetas, addLinks, addMeta } from '../../libs/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import ConsoleErrorReporter from './components/console-error-reporter';

let localFlowRouter;
export default function (injectDeps, { Meteor, FlowRouter }) {
  localFlowRouter = FlowRouter;

  if (Meteor.isClient) {
    StyleSheet.rehydrate(window.renderedClasses);
  }

  const TrioLayoutCtx = (props) => {
    const TrioLayout = require('./containers/layout.trio').default;
    const _TrioLayoutCtx = injectDeps(TrioLayout);
    return (
      <AppContainer errorReport={ConsoleErrorReporter}>
        <_TrioLayoutCtx {...props} />
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

      mount(TrioLayoutCtx, {
        content: () => (<p>Content <a href="/test">test</a></p>),
      });
    },
  });

  FlowRouter.route('/test', {
    name: 'test',
    action() {
      setTitle('Simple Todo');
      addMetas(defaultMetas);
      addLinks(defaultLinks);
      addMeta({
        name: 'description',
        content: 'woohooo',
      });

      mount(TrioLayoutCtx, {
        content: () => (<p>test</p>),
      });
    },
  });
}

if (module.hot) {
  module.hot.accept([
    './containers/layout.trio',
  ], () => {
    localFlowRouter._current.route._action(localFlowRouter._current.params);
  });
}
