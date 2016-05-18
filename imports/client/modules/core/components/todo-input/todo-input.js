import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <input
        name="todoInput"
        type="text"
        placeholder="Write a todo"
      />
    );
  }
}

export default TodoInput;
