import React from 'react';
import { observer } from 'mobx-react';

import context from '@/Context';

const FunctionalCounterHook = (observer(() => {
  const store = React.useContext(context);
  const { count, todo } = store;
  return (
    <section data-name="FunctionalCounterHook">
      <h2>
        CountStore.number:
        {count.number}
      </h2>
      <button onClick={count.onIncrement}>increment</button>
      <button onClick={count.onDecrement}>decrement</button>
      <button onClick={() => { count.number += 2; }}>+2</button>
      <p>{`${todo.remainingTodosCount}/${todo.todoCount}`}</p>
    </section>
  );
}));

export default FunctionalCounterHook;
