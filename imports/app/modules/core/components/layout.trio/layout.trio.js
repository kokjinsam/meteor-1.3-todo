import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
    height: '300px',
    '@media (min-width: 400px)': {
      backgroundColor: 'blue',
    },
  },
  random: {
    backgroundColor: 'blue',
  },
});

const propTypes = {
  content: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

const TrioLayout = ({
  content,
  todos,
}) => (
  <div className={css(styles.red)}>
    {content()}
    {
      todos.map((todo, index) => (
        <span key={index}>{todo.todo}</span>
      ))
    }
    <div className={css(styles.random)}></div>
  </div>
);

TrioLayout.propTypes = propTypes;

export default TrioLayout;
