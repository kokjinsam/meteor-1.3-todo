import React, { PropTypes } from 'react';
import NoSSR from 'react-no-ssr';
import Appbar from 'react-appbar';
import useSheet from 'react-jss';
import Placeholder from '../placeholder';

import styles from './styles';

const propTypes = {
  sheet: PropTypes.any,
};

const Toolbar = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <NoSSR onSSR={<Placeholder height="5.6rem" />}>
      <Appbar className={classes.toolbar}>
        Simple Todo
      </Appbar>
    </NoSSR>
  );
};

Toolbar.propTypes = propTypes;

export default useSheet(Toolbar, styles);
