import React from 'react';

interface Props {
  id: string;
  done: boolean;
  toggleItem: (id:string) => void;
  onDelete: (id:string) => void;
}

export default class TodoItem extends React.Component<Props> {
  onClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toggleItem(this.props.id);
    }
  }

  onDeleteClick = () => {
    console.log('onDeleteClick');
    this.props.onDelete(this.props.id);
  }

  render() {
    let className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }
    return (
      <li className={className} onClick={this.onClick}>
        {this.props.children}
        {/* 實作 Delete */}
        <button className="todo-item__btn btn btn-info" onClick={this.onDeleteClick}>X</button>
      </li>
    );
  }
}
