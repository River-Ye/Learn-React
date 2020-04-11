import React, { useState } from 'react';
// https://reactjs.org/docs/hooks-state.html#equivalent-class-example
export default function HooksExample() {
  const [count, setCount] = useState(0);

  return (
    <section data-name="Hooks0 useState">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
}
