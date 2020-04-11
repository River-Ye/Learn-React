/* eslint prefer-arrow-callback:0, func-names:0, arrow-body-style:0 */
import React from 'react';

interface State {
  count: number;
}

export default class ComponentSetStateExample extends React.Component<void, State> {
  state = {
    count: 0,
  };

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    setTimeout(() => {
      console.log(this.state.count);
    }, 500);
    // 會觸發 render 幾次呢 ?
  }

  clickHandler2 = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
    this.setState((prev) => {
      return { count: prev.count + 1 };
    }, () => {
      console.log(this.state.count);
    });
    // 會觸發 render 幾次呢 ?
  }

  render() {
    const { count } = this.state;
    console.log('render');
    return (
      <section>
        <h2>Example1 Component</h2>
        <button onClick={this.clickHandler}>Add</button>
        <button onClick={this.clickHandler2}>Add callback</button>
        <p>Count: {count}</p>
      </section>
    );
  }
}
