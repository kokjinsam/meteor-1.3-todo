import React from 'react';
import { mount } from 'react-mounter';

import { setTitle, addMetas, addLinks, addMeta } from '../../libs/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import TrioLayout from './components/layout.trio';
import Toolbar from './components/toolbar';
import Footer from './components/footer';
import TodoList from './containers/todo-list';

export default function (injectDeps, { FlowRouter }) {
  const TrioLayoutCtx = injectDeps(TrioLayout);

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
        topNavigation: () => (<Toolbar />),
        content: () => (<TodoList />),
        footer: () => (<Footer />),
      });
    },
  });

  FlowRouter.route('/get-data-from-method', {
    name: 'hello',
    action() {
      setTitle('Get Data from Method');
      addMetas(defaultMetas);
      addLinks(defaultLinks);

      mount(TrioLayoutCtx, {
        topNavigation: () => (<Toolbar />),
        content: () => (<TodoList />),
        footer: () => (<Footer />),
      });
    },
  });
}
