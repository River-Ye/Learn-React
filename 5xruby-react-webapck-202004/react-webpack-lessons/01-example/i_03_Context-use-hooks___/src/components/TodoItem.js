import React from 'react';

interface Props {
  id: string,
  text: string,
  done: boolean,
  toggleItem: (id:string)=>{}
}
export default function TodoItem({
  id, done, children, toggleItem,
}:Props) {
  let className = 'todo-item';
  if (done) {
    className += ' done';
  }
  return (
    <div className="debug" data-name="TodoItem">
      <li
        className={className}
        onClick={() => {
          toggleItem(id);
        }}
      >
        {children}
      </li>
    </div>
  );
}
