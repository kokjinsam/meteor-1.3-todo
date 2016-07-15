import React from 'react';
import radium, { StyleRoot } from 'radium';

const getDisplayName = component => (
  component.displayName || component.name || 'Component'
);

function wrapStyle(Component, style) {
  const RadiumizedComponent = radium(Component);
  RadiumizedComponent.displayName = `Radiumized(${getDisplayName(Component)})`;

  const RadiumComponent = (props) => (
    <StyleRoot style={style}>
      <RadiumizedComponent {...props} />
    </StyleRoot>
  );

  RadiumComponent.displayName = `StyleWrapped(${getDisplayName(Component)})`;

  return RadiumComponent;
}

export {
  wrapStyle,
  getDisplayName,
};
