import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app container">
      {/* TODO: 1 */}
      <TodoList url="/api/list/milkmidi" />
    </div>
  );
}

export default App;
