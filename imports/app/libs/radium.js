import React from 'react';
import radium, { StyleRoot } from 'radium';

function wrapStyle(Component) {
  const RadiumizedComponent = radium(Component);
  const WrappedStyleComponent = (props) => (
    <StyleRoot>
      <RadiumizedComponent {...props} />
    </StyleRoot>
  );

  return WrappedStyleComponent;
}

export default radium;
export {
  wrapStyle,
};
