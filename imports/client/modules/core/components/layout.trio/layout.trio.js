import React, { PropTypes } from 'react';
import { wrapStyle } from 'komorebi-utils/radium';

import styles from './styles';

const propTypes = {
  topNavigation: PropTypes.func,
  content: PropTypes.func.isRequired,
  footer: PropTypes.func,
  store: PropTypes.any,
  client: PropTypes.any,
};

const TrioLayout = ({
  topNavigation,
  content,
  footer,
}) => (
  <div style={styles.container}>
    <If condition={topNavigation}>
      <div style={styles.topNavigation}>
        {topNavigation()}
      </div>
    </If>

    <div style={styles.content}>
      <h1>A Simple Todo List</h1>

      <If condition={content}>
        {content()}
      <Else />
        <p>No content is given.</p>
      </If>
    </div>

    <If condition={footer}>
      <div style={styles.footer}>
        {footer()}
      </div>
    </If>
  </div>
);

TrioLayout.propTypes = propTypes;

export default wrapStyle(TrioLayout, { height: '100%' });
