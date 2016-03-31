import React, { PropTypes } from 'react';
import { wrapStyle } from '/imports/app/libs/radium';

import styles from './styles';

const propTypes = {
  topNavigation: PropTypes.func,
  content: PropTypes.func,
  footer: PropTypes.func,
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
    <Else />
      <div style={styles.topNavigation}>
        No Top Navigation
      </div>
    </If>

    <If condition={content}>
      <div style={styles.content}>
        {content()}
      </div>
    <Else />
      <div style={styles.content}>
        No Content
      </div>
    </If>

    <If condition={footer}>
      <div style={styles.footer}>
        {footer()}
      </div>
    <Else />
      <div style={styles.footer}>
        No Footer
      </div>
    </If>
  </div>
);

TrioLayout.propTypes = propTypes;

/*
 * This wraps TrioLayout in Radium's StyleRoot
 * component so that you can use keyframes
 * and media queries
 */
export default wrapStyle(TrioLayout);
