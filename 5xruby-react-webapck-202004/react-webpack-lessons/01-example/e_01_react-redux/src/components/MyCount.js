import React from 'react';

interface Props {
  count: number;
}
function MyCount({ count }:Props) {
  return (
    <section>
      <h3>MyCount</h3>
      Count: {count}
    </section>
  );
}

export default MyCount;
