import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

export default function () {
  const cacheLength = 1000 * 60; // 60 seconds;
  FlowRouter.setPageCacheTimeout(cacheLength);
}
