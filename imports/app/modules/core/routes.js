import React from 'react';
import { mount } from 'react-mounter';
import { Todos } from '/imports/lib/collections';

import { setTitle, addMetas, addLinks, addMeta } from '../../libs/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import TrioLayout from './components/layout.trio';
import Toolbar from './components/toolbar';
import Footer from './components/footer';
import TodoList from './containers/todo-list';

function getTodos() {
  return Todos.find(
    {},
    {
      sort: {
        createdAt: -1,
      },
    }).fetch();
}

export default function (injectDeps, { Meteor, FlowRouter }) {
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

      /*
      const getTodos = require('/imports/server/libs/test').getTodos;
      */
      console.log(getTodos);
      const todos = getTodos();
      console.log(todos);
      console.log(FlowRouter.ssrContext.get());

      console.log('mounting');
      mount(TrioLayoutCtx, {
        topNavigation: () => (<Toolbar />),
        content: () => (<TodoList />),
        footer: () => (<Footer />),
      });
      console.log('mounted');
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
