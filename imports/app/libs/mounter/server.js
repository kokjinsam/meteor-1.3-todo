import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildRootNode } from './utils';
import { StyleSheetServer } from 'aphrodite';
import { Meteor } from 'meteor/meteor';
import { Inject } from 'meteor/meteorhacks:inject-initial';

export function mounter(layoutClass, regions, options) {
  const el = React.createElement(layoutClass, regions);
  const {
    html,
    css,
  } = StyleSheetServer.renderStatic(() => (
    ReactDOMServer.renderToString(el)
  ));

  const elHtml = html;

  if (!Package['meteorhacks:inject-initial']) {
    const error =
      'meteorhacks:inject-initial is required to mount stylesheets in the server.';
    throw new Error(error);
  }

  if (Meteor.isServer) {
    const styleTag = `<style data-aphrodite>${css.content}</style>`;
    Inject.rawHead('aphrodite-style', styleTag);

    const scriptTag = `<script>window.renderedClasses = ${JSON.stringify(css.renderedClassNames)};</script>`;
    Inject.rawBody('aphrodite-script', scriptTag);
  }

  const {
    rootId,
    rootProps,
  } = options;
  const rootNodeHtml = buildRootNode(rootId, rootProps);
  const rootHtml = rootNodeHtml.replace('</div>', elHtml + '</div>');

  if (typeof Package === 'undefined') {
    const error = 'Server side mounting in only available with Meteor.';
    throw new Error(error);
  }

  if (!Package['kadira:flow-router-ssr']) {
    const error =
      'FlowRouter SSR is required to mount components in the server.';
    throw new Error(error);
  }

  const FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;
  const ssrContext = FlowRouter.ssrContext.get();
  ssrContext.setHtml(rootHtml);
}
