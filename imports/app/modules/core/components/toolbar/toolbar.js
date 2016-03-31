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
    <Placeholder height="5.6rem">
      <NoSSR>
        <Appbar className={classes.toolbar}>
          Simple Todo
        </Appbar>
      </NoSSR>
    </Placeholder>
  );
};

Toolbar.propTypes = propTypes;

export default useSheet(Toolbar, styles);
