import React from 'react';

import TodoItem from './TodoItem';
import { TodoType } from '../types';

interface Props {
  todos: TodoType[];
  toggleItem: (id:string)=>void;
}

function TodoList({ todos, toggleItem }:Props) {
  return (
    <section data-name="TodoList" className="todo-list">
      <ul className="todo-items">
        {
            todos.map((item) => (
              <TodoItem
                key={item.id}
                {...item}
                toggleItem={toggleItem}
              >
                {item.text}
              </TodoItem>
            ))
          }
      </ul>
    </section>
  );
}


export default TodoList;
