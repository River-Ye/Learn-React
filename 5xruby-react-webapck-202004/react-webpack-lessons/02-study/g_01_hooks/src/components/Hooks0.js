import React, { useState } from 'react';
// https://reactjs.org/docs/hooks-state.html#equivalent-class-example
export default function Hooks0() { // 不能寫在 components 裡
  // TODO
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(1); // 兩個以上 state

  // /*
  return (
    <section>
      <h1>Hooks0 useState</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
  // */
}
