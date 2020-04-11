import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';
import TodoClearContainer from '../containers/TodoClearContainer';
import LoadingContainer from '../containers/LoadingContainer';

export default function App() {
  return (
    <div className="app container">
      <LoadingContainer />
      <TodoFormContainer />
      <TodoListContainer />
      <TodoClearContainer />
    </div>
  );
}
