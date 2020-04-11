import React from 'react';

interface Props {
  id: string;
  done: boolean;
  toggleItem: (id:string)=> void;
  children: React.ReactNode;
}

const TodoItem = (props:Props) => {
  const {
    id, done, toggleItem, children,
  } = props;
  let className = 'todo-item';
  if (done) {
    className += ' done';
  }
  return (
    <li className={className} onClick={() => toggleItem(id)}>
      {children}
      <button className="todo-item__btn btn btn-info">X</button>
    </li>
  );
};

export default TodoItem;
