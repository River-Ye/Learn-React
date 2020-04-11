import React from 'react';

const computeExpensiveValue = (value:number):number => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 1000000000; i += 1) {
    r += 1;
  }
  return r;
};


export default function HooksExample() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  console.time();
  const memoizedValue:number = React.useMemo(() => {
    const result:number = computeExpensiveValue(count);
    return result;
  }, [count]);
  console.timeEnd();

  return (
    <section data-name="Hooks4 useMemo">
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>setCount</button>
      <h1>memoizedValue: {memoizedValue}</h1>
      <h1>count2: {count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>setCount2</button>
    </section>
  );
}
