import React, { PropTypes } from 'react';
import Redbox from 'redbox-react';

const propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

const ConsoleErrorReporter = ({
  error,
}) => (
  <Redbox error={error} />
);

ConsoleErrorReporter.propTypes = propTypes;

export default ConsoleErrorReporter;
