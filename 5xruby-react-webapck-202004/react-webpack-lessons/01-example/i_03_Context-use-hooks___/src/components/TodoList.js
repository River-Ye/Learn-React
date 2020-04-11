import React, { useContext } from 'react';
import TodoItem from './TodoItem';

import Context from '@/context/Context';

export default function TodoList() {
  const { state, dispatch } = useContext(Context);
  const toggleItem = (id:string) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };
  return (
    <div className="todo-list">
      <ul className="todo-items">
        {
            state.todos.map(item => (
              <TodoItem
                id={item.id}
                done={item.done}
                key={item.id}
                toggleItem={toggleItem}
              >
                {item.text}
              </TodoItem>
            ))
          }
      </ul>
    </div>
  );
}
