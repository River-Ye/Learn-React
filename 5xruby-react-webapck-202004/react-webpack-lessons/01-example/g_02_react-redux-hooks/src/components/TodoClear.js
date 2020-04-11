import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actionClearTodo } from '../actions';


export default function TodoClear() {
  const count = useSelector(state => state.todos.length);
  const dispatch = useDispatch();
  const btnClassNames = classnames('btn btn-danger', {
    disabled: count === 0,
  });
  const onClear = () => {
    dispatch(actionClearTodo());
  };
  return (
    <section data-name="TodoClear">
      <span className="mr-3">Count:{count}</span>
      <button className={btnClassNames} onClick={onClear}>Clear</button>
    </section>
  );
}
