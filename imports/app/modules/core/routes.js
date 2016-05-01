import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount } from '../../libs/mounter';
import { StyleSheet } from 'aphrodite';

import { setTitle, addMetas, addLinks, addMeta } from '../../libs/dochead';
import { defaultMetas, defaultLinks } from '../../configs/head';

import TrioLayout from './containers/layout.trio';

export default function (injectDeps, { FlowRouter }) {
  if (Meteor.isClient) {
    StyleSheet.rehydrate(window.renderedClasses);
  }

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
