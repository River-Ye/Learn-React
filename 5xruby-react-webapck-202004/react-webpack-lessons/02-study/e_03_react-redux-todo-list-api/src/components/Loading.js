import React from 'react';

interface Props {
  show:boolean
}

export default function Loading({ show }:Props) {
  let clazz = 'loading';
  if (show) {
    clazz += ' is-show';
  }
  return (
    <div className={clazz}>Loading</div>
  );
}
