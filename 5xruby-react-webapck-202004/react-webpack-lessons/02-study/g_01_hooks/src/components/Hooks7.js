import React, { useState, useCallback } from 'react';
import MemoButton from './MemoButton';
// https://github.com/facebook/react/blob/master/packages/react/src/ReactHooks.js#L112

export default function Hooks7() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  /*
  const incrementCallback = () => {
    setCount(count + 1);
  };
  const incrementMemoizedCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 當 count 有變時，會回傳新的 function

  const incrementMemoizedCallback2 = useCallback(() => {
    // wrong
    setCount(count + 1);
    // correct
    // setCount(prev => prev + 1);
  }, []);
  const incrementMemoizedCallback3 = useCallback(() => {
    setCount(count + 1);
  });
  */
  return (
    <section>
      <h1>Hooks7 useCallback</h1>
      <p>You clicked {count} times</p>
      <MemoButton onClick={incrementCallback}>Increment</MemoButton>
      <MemoButton onClick={incrementMemoizedCallback}>incrementMemoizedCallback</MemoButton>
      <MemoButton onClick={incrementMemoizedCallback2}>incrementMemoizedCallback2</MemoButton>
      <MemoButton onClick={incrementMemoizedCallback3}>incrementMemoizedCallback3</MemoButton>
      <button onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
}
