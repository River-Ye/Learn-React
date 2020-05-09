import React from 'react';

interface Props {
  id: string;
  done: boolean;
  toggleItem: (id:string) => void;
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
  const atClick = React.useCallback(() => {
    toggleItem(id);
  }, []);
  return (
    <li data-testid="li" className={className} onClick={atClick}>
      {children}
    </li>
  );
};

export default TodoItem;
