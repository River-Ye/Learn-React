import React, { useState, useEffect } from 'react';
// https://reactjs.org/docs/hooks-effect.html#example-using-classes
export default function HooksExample() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect count', count);
    document.title = `You clicked ${count} times`;
  });

  return (
    <section data-name="Hooks1 useEffect">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
}
