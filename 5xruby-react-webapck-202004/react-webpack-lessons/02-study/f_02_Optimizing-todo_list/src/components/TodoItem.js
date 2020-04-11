import React from 'react';
import PropTypes from 'prop-types';

// https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js#L39
// PureComponent shallowEqual source Code
export default class TodoItem extends React.Component {
  onClick = () => {
    this.props.toggleItem(this.props.id);
  }

  render() {
    let className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired,
};
