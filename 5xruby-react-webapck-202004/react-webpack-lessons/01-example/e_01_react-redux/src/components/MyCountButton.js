import React from 'react';

interface Props {
  count: number;
  onIncrease: ()=> void;
  onDecrease: ()=> void;
}

function MyCountButton(props:Props) {
  const { count, onIncrease, onDecrease } = props;
  return (
    <section>
      <h3>MyCountButton</h3>
      Count: {count}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>+</button>
    </section>
  );
}

export default MyCountButton;
