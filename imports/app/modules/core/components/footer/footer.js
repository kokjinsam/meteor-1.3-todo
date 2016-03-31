import React from 'react';
import { wrapStyle } from '/imports/app/libs/radium';

import styles from './styles';

const Footer = () => (
  <div style={styles.footer}>
    Uncopyright (c) 2016 No Rights Reserved.
  </div>
);

export default wrapStyle(Footer);
