import React, { PropTypes, Component } from 'react';
import { wrapStyle } from '../../../../libs/radium';
import IconButton from 'material-ui/lib/icon-button';

import styles from './styles';

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickCheckBtn: PropTypes.func.isRequired,
  completed: PropTypes.bool,
};

class TodoItem extends Component {
  handleClickCheckBtn = () => {
    const {
      id,
      onClickCheckBtn,
    } = this.props;

    onClickCheckBtn(id);
  }

  handleClickRemoveBtn = () => {
    console.log('removed');
  }

  render() {
    const {
      title,
      completed,
    } = this.props;

    let todoTitleStyle = styles.todoTitle;
    if (completed) {
      todoTitleStyle = {
        ...todoTitleStyle,
        color: '#c8c8c8',
        textDecoration: 'line-through',
      };
    }

    return (
      <li style={styles.item}>
        <span style={todoTitleStyle}>{title}</span>

        <If condition={!completed}>
          <IconButton
            iconStyle={styles.icon}
            onClick={this.handleClickCheckBtn}
          >
            <i className="material-icons">check</i>
          </IconButton>
        </If>

        <If condition={completed}>
          <IconButton
            iconStyle={styles.icon}
            onClick={this.handleClickRemoveBtn}
          >
            <i className="material-icons">delete</i>
          </IconButton>
        </If>
      </li>
    );
  }
}

TodoItem.propTypes = propTypes;

export default wrapStyle(TodoItem);
