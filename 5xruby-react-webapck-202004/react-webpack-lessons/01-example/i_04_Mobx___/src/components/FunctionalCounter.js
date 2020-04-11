import React from 'react';
import { observer, inject } from 'mobx-react';


const FunctionalCounter = inject('count')(observer(({ count }) => (
  <section data-name="FunctionalCounter">
    <h2>
      CountStore.number:
      {count.number}
    </h2>
    <button onClick={count.onIncrement}>increment</button>
    <button onClick={count.onDecrement}>decrement</button>
    <button onClick={() => { count.number += 2; }}>+2</button>
  </section>
)));

export default FunctionalCounter;
