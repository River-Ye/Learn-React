import React from 'react';
import MyCountContainer from '@/containers/MyCountContainer';
import MyCountButtonContainer from '@/containers/MyCountButtonContainer';


export default function App() {
  return (
    <div className="app">
      <MyCountContainer />
      <MyCountButtonContainer />
    </div>
  );
}
