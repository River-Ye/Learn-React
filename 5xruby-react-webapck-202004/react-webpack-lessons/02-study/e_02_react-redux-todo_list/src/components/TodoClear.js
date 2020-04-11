import React from 'react';
import classnames from 'classnames';

interface Props {
  count: number;
  onClear: ()=> void;
}
export default function TodoClear({ count, onClear }:Props) {
  const btnClassNames = classnames('btn btn-danger', {
    disabled: count === 0,
  });
  return (
    <section data-name="TodoClear">
      <span className="mr-3">
        Count:
        {count}
      </span>
      <button className={btnClassNames} onClick={onClear}>Clear</button>
    </section>
  );
}
