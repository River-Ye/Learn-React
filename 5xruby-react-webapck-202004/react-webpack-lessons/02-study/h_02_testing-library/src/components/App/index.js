import React from 'react';

import Counter from '../Counter';
import DisplayData from '../DisplayData';

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Counter />
        <DisplayData />
      </div>
    </div>
  );
}
