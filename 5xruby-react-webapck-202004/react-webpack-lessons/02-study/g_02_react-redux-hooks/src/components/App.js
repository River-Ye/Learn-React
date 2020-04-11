import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoClear from './TodoClear';


export default function App() {
  return (
    <div className="app container">
      <TodoForm />
      <TodoList />
      <TodoClear />
    </div>
  );
}
