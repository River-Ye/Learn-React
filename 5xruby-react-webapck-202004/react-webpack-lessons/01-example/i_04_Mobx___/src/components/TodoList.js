import React from 'react';
import { useObserver } from 'mobx-react';

import context from '@/Context';
import { type TodoType } from '@/store/TodoStore';

const TodoList = () => {
  const store = React.useContext(context);
  const { count, todo } = store;
  const addTodo = () => {
    todo.addTodo(new Date().toString());
  };
  return useObserver(() => (
    <section data-name="TodoList" className="style-1">
      <h2>
        CountStore.number:
        {count.number}
      </h2>
      {
        todo.todos.map((o:TodoType) => (
          <div
            className={`todo-item ${o.done ? 'is-done' : ''}`}
            key={o.id}
            onClick={() => { todo.toggleTodo(o.id); }}
          >
            {o.text}
          </div>
        ))
      }
      <p>{`${todo.remainingTodosCount}/${todo.todoCount}`}</p>
      <button onClick={addTodo}>addTodo</button>
    </section>
  ));
};

export default TodoList;
