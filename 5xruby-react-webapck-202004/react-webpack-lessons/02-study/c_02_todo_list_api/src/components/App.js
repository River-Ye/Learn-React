import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app container">
      {/* TODO: 1 */}
      <TodoList url="/api/list/riverye" />
    </div>
  );
}

export default App;
