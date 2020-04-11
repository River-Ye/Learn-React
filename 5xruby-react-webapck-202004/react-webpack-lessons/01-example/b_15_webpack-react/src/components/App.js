import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="app container">
      <MyComponent count={9527} onClick={() => console.log(123)} />
    </div>
  );
}

export default App;
