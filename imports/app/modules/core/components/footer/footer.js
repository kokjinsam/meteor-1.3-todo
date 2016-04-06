import React from 'react';
import { wrapStyle } from '../../../../libs/radium';

import styles from './styles';

const Footer = () => (
  <div style={styles.footer}>
    Uncopyright (c) 2016 No Rights Reserved.
  </div>
);

export default wrapStyle(Footer);
