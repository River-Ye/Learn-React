import React from 'react';
import Counter from '@/components/Counter';
import FunctionalCounter from '@/components/FunctionalCounter';
import FunctionalCounterHook from '@/components/FunctionalCounterHook';
import TodoList from '@/components/TodoList';


export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Counter />
        <FunctionalCounter />
        <FunctionalCounterHook />
        <TodoList />
      </div>
    </div>
  );
}
