import React, { useContext, useRef } from 'react';
import Context from '@/context/Context';

export default function TodoForm() {
  const { dispatch } = useContext(Context);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    inputRef.current.value = '';
    dispatch({ type: 'ADD_TODO', text });
  };
  return (
    <section data-name="TodoForm">
      <form className="todo-form" onSubmit={onSubmit}>
        <input type="text" ref={inputRef} />
      </form>
    </section>
  );
}
