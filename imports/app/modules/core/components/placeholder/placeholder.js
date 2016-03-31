import React, { PropTypes } from 'react';
import { wrapStyle } from '/imports/app/libs/radium';

import styles from './styles';

const propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.any,
};

const defaultProps = {
  backgroundColor: '#e0e0e0',
  width: '100%',
  height: '4.8rem',
};

const Placeholder = ({
  children,
  backgroundColor,
  width,
  height,
  style,
}) => {
  const { placeholder } = styles;
  let combinedStyle = Object.assign({}, placeholder);
  combinedStyle = Object.assign(combinedStyle, style);
  combinedStyle = Object.assign(combinedStyle, {
    backgroundColor,
    width,
    height,
  });

  return (
    <div style={combinedStyle}>
      {children}
    </div>
  );
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default wrapStyle(Placeholder);
