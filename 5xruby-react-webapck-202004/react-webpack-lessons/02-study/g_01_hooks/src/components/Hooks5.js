import React, { useReducer } from 'react';

// /*
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
// */

export default function Hooks5() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // /*
    <section>
      <h1>Hooks5 useReducer</h1>
      Count: {state.count}
      <p>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </p>
    </section>
    // */
  );
}
