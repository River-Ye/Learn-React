import React from 'react';
import Example1ComponentSetStateExample from './Example1ComponentSetStateExample';
import Example2ComponentExample from './Example2ComponentExample';
import Example3PureComponentExample from './Example3PureComponentExample';
import {
  Example4PropsRenderExample,
  Example4PropsRenderPureExample,
} from './Example4PureComponentExample';

import Example5MemoStatelessComponent from './Example5MemoStatelessComponent';


export default class App extends React.Component {
  state = {
    label: 'milkmidi',
  }

  onIncrement = () => {
    this.setState({ });
  }


  render() {
    const { label } = this.state;
    return (
      <div className="app container">
        <button onClick={this.onIncrement}>increment</button>
        <Example1ComponentSetStateExample />
        <Example2ComponentExample />
        <Example3PureComponentExample />
        <Example4PropsRenderExample label={label} onClick={this.onIncrement} />
        <Example4PropsRenderPureExample label={label} onClick={this.onIncrement} /> {/* 效能會比較好，但如果要傳參數的話，才改用33行寫法 */}
        <Example4PropsRenderPureExample label={label} onClick={() => this.onIncrement()} /> {/* 不建議這麼寫，效能會比較差，除非要傳參數 */}
        <Example5MemoStatelessComponent label={label} />
      </div>
    );
  }
}
