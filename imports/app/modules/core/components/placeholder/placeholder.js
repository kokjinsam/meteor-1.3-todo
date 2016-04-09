import React, { PropTypes } from 'react';
import { wrapStyle } from '../../../../libs/radium';

import styles from './styles';

const propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.any,
  photo: PropTypes.bool,
  loading: PropTypes.bool,
};

const defaultProps = {
  width: '100%',
  height: 'initial',
  backgroundColor: '#e0e0e0',
  photo: false,
  loading: false,
};

const Placeholder = ({
  children,
  backgroundColor,
  width,
  height,
  style,
  photo,
  loading,
}) => {
  /**
   * Priority list:
   * 1. style will override explicit style
   * 2. explicit style, eg. height, width,...
   */
  let combinedStyle = Object.assign({}, styles.placeholder);
  combinedStyle = Object.assign(combinedStyle, {
    backgroundColor,
    width,
    height,
  });
  combinedStyle = Object.assign(combinedStyle, style);

  return (
    <div style={combinedStyle}>
      <If condition={loading}>
        <div style={styles.loading}>
          loading...
        </div>
      </If>
      <If condition={photo}>
        <div>
          <i
            style={styles.icon}
            className="material-icons"
          >
            photo
          </i>
        </div>
      </If>
      {children}
    </div>
  );
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default wrapStyle(Placeholder);
