import React from 'react';
import { useDispatch } from 'react-redux';
import { actionAddTodo } from '../actions';


export default function TodoForm() {
  const dispatch = useDispatch();

  const inputRef = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text === '') {
      return;
    }
    inputRef.current.value = '';
    dispatch(actionAddTodo(text));
  };

  return (
    <section data-name="TodoForm">
      <form className="todo-form" onSubmit={onSubmit}>
        <input ref={inputRef} />
      </form>
    </section>
  );
}
