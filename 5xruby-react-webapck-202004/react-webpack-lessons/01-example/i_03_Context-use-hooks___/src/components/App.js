
import React from 'react';
import Context from '@/context/Context';
import reducer from '@/context/reducer';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import ToggleThemeButton from '@/components/ToggleThemeButton';

export default function App() {
  const initialState = React.useContext(Context);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="app">
      <Context.Provider value={{ state, dispatch }}>
        <ToggleThemeButton />
        <TodoForm />
        <TodoList />
      </Context.Provider>
    </div>
  );
}
