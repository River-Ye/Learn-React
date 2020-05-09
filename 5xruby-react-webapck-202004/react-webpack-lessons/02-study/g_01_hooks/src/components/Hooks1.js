import React, { useState, useEffect } from 'react';
// https://reactjs.org/docs/hooks-effect.html#example-using-classes
export default function Hooks1() {
  // TODO
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // /*
  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect count', count);
    document.title = `You clicked ${count} times`;
  });
  // */

  // only use componentDidMount or componentDidUpdate:
  useEffect(() => {
    console.log('9527');
  }, []); // 為什麼塞空 array 可以 componentDidMount

  // /*
  return (
    <section>
      <h1>Hooks1 useEffect</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
  // */
}
