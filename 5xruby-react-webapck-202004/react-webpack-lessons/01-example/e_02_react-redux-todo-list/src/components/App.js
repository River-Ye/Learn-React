import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';
import TodoClearContainer from '../containers/TodoClearContainer';

export default function App() {
  return (
    <div className="app container">
      <TodoFormContainer />
      <TodoListContainer />
      <TodoClearContainer />
    </div>
  );
}
