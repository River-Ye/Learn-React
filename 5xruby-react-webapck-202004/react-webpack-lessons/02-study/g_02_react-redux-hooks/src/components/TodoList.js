import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { actionToggleTodo } from '../actions';

import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const toggleItem = (id) => {
    dispatch(actionToggleTodo(id));
  };
  return (
    <section className="todo-list">
      <h3>TodoList.js</h3>
      <ul className="todo-items">
        {
            todos.map(item => (
              <TodoItem
                key={item.id}
                id={item.id}
                done={item.done}
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
