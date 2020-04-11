import React from 'react';
import HigherOrderComponent from '@/components/HigherOrderComponent';


const Component1 = props => (
  <div className="block">
    Component1:{props.name}
  </div>
);

const Component2 = props => (
  <div className="block">
    Component2:{props.name}
  </div>
);


const ConnectComponent1 = HigherOrderComponent(Component1);
const ConnectComponent2 = HigherOrderComponent(Component2);

function App() {
  return (
    <div className="app container">
      <ConnectComponent1 />
      <ConnectComponent2 />
    </div>
  );
}

export default App;
