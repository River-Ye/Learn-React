import React from 'react';

interface Props {
  id: string;
  done: boolean;
  toggleItem: (id:string) => void;
}

export default class TodoItem extends React.Component<Props> {
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