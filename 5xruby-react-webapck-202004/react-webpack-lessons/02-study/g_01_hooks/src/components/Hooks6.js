import React, { useState, useEffect } from 'react';

export default function Hooks6() {
  const [count, setCount] = useState(0);

  // /*
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Hooks7', count);
      // wrong
      // setCount(count + 1);

      // correct
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // */

  return (
    <section>
      <h1>Hooks6</h1>
      <p>count:{count}</p>
    </section>
  );
}
